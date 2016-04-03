import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import {Promise} from 'es6-promise';
import fetchMock from 'fetch-mock';

import {receive, fetchCounters} from '../../app/actions/fetch';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('receive', function () {
    it('should return correct action object', function() {
        const results = receive([{id: 'abcd', title: 'test', count: 1}]);
        expect(results).to.eql({
            type: 'RECEIVE_COUNTERS',
            data: [{id: 'abcd', title: 'test', count: 1}]
        });
    });
});

describe('fetch', function () {
    it('should fetch all counter and trigger receive', function (done) {
        const dispatch = sinon.stub();
        fetchMock.mock('/api/v1/counters', [{id: 'abcd', title: 'test', count: 1}]);

        const getCounters = fetchCounters();
        const results = getCounters(dispatch);

        expect(results).to.eventually.be.fulfilled.then(function() {
            expect(dispatch.calledWith({
                type: 'RECEIVE_COUNTERS',
                data: [{id: 'abcd', title: 'test', count: 1}]
            })).to.equal(true);
            fetchMock.restore();
            done();
        });
    });
});
