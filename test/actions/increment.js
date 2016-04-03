import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import {Promise} from 'es6-promise';
import fetchMock from 'fetch-mock';

import {increment, persistIncrement} from '../../app/actions/increment';

chai.use(chaiAsPromised);
const expect = chai.expect;

afterEach(function () {
    fetchMock.restore();
});

describe('increment', function() {
    it('should return correct action object', function() {
        const results = increment('abcd');
        expect(results).to.eql({
            type: 'INCREMENT',
            id: 'abcd'
        });
    });
});

describe('persistIncrement', function () {
    it('should fetch and dispatch correct actions', function (done) {
        const dispatch = sinon.stub();
        fetchMock.mock('/api/v1/counter/inc', [{id: 'abcd', title: 'test', count: 1}]);

        const persist = persistIncrement('abcd');
        const result = persist(dispatch);

        expect(dispatch.calledWith({
            type: 'INCREMENT',
            id: 'abcd'
        })).to.equal(true);
        expect(result).to.eventually.be.fulfilled.then(function() {
            expect(dispatch.calledWith({
                type: 'RECEIVE_COUNTERS',
                data: [{id: 'abcd', title: 'test', count: 1}]
            })).to.equal(true);
            done();
        });
    });
});
