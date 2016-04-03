import {expect} from 'chai';
import sinon from 'sinon';

import total from '../../app/reducers/total';

describe('total reducer', function() {
    it('should return initial state on no state provided', function() {
        const result = total(undefined, {type: 'NOT_AN_ACTION'});
        expect(result).to.eql({
            total: 0
        });
    });

    it('should increment the state', function() {
        const result = total({total: 1}, {type: 'INCREMENT'});
        expect(result).to.eql({
            total: 2
        });
    });

    it('should decrement the state', function() {
        const result = total({total: 1}, {type: 'DECREMENT'});
        expect(result).to.eql({
            total: 0
        });
    });

    it('should sum total from counters', function() {
        const result = total(undefined, {
            type: 'RECEIVE_COUNTERS',
            data: [
                {id: 'abcd', title: 'test', count: 3},
                {id: 'efgh', title: 'test2', count: 2},
                {id: 'ijkl', title: 'test3', count: -1}
            ]
        });
        expect(result).to.eql({
            total: 4
        });
    });
});
