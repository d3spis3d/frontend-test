import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import {Promise} from 'es6-promise';
import fetchMock from 'fetch-mock';

import {create} from '../../app/actions/create';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('create', function() {
    it('should create new counter and receive counter list', function(done) {
        const dispatch = sinon.stub();
        fetchMock.mock('/api/v1/counter', [{id: 'abcd', title: 'Test', count: 0}]);

        const createTestCounter = create('Test');
        const result = createTestCounter(dispatch);

        expect(result).to.eventually.be.fulfilled.then(function() {
            expect(dispatch.calledWith({
                type: 'RECEIVE_COUNTERS',
                data: [{id: 'abcd', title: 'Test', count: 0}]
            }));
            expect(fetchMock.lastOptions('/api/v1/counter')).to.eql({
                method: 'POST',
                body: JSON.stringify({title: 'Test'}),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            });
            fetchMock.restore();
            done();
        }).catch(function(err) {
            console.log(err);
        });
    });
});
