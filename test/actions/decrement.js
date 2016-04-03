import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import {Promise} from 'es6-promise';
import fetchMock from 'fetch-mock';

import {decrement, persistDecrement} from '../../app/actions/decrement';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('decrement', function() {
    it('should return correct action object', function() {
        const results = decrement('abcd');
        expect(results).to.eql({
            type: 'DECREMENT',
            id: 'abcd'
        });
    });
});

describe('persistDecrement', function () {
    it('should fetch and dispatch correct actions', function (done) {
        const dispatch = sinon.stub();
        fetchMock.mock('/api/v1/counter/dec', [{id: 'abcd', title: 'test', count: 1}]);

        const persist = persistDecrement('abcd');
        const result = persist(dispatch);

        expect(dispatch.calledWith({
            type: 'DECREMENT',
            id: 'abcd'
        })).to.equal(true);
        expect(result).to.eventually.be.fulfilled.then(function() {
            expect(dispatch.calledWith({
                type: 'RECEIVE_COUNTERS',
                data: [{id: 'abcd', title: 'test', count: 1}]
            })).to.equal(true);
            fetchMock.restore();
            done();
        });
    });
});
