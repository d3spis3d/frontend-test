import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import {Promise} from 'es6-promise';
import fetchMock from 'fetch-mock';

import {deleteCounter} from '../../app/actions/delete';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('create', function() {
    it('should create new counter and receive counter list', function(done) {
        const dispatch = sinon.stub();
        fetchMock.mock('/api/v1/counter', []);

        const deleteTestCounter = deleteCounter('abcd');
        const result = deleteTestCounter(dispatch);

        expect(result).to.eventually.be.fulfilled.then(function() {
            expect(dispatch.calledWith({
                type: 'RECEIVE_COUNTERS',
                data: []
            }));
            expect(fetchMock.lastOptions('/api/v1/counter')).to.eql({
                method: 'DELETE',
                body: JSON.stringify({id: 'abcd'}),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            });
            fetchMock.restore();
            done();
        })
    });
});
