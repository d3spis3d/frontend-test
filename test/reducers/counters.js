import {expect} from 'chai';
import sinon from 'sinon';

import counters from '../../app/reducers/counters';

describe('counters', function() {
    it('should return empty initial state', function() {
        const results = counters(undefined, {type: 'NOT_AN_ACTION'});
        expect(results).to.eql({
            counters: []
        });
    });

    it('should increment the counter by id', function() {
        const initialState = {
            counters: [
                {id: 'abcd', title: 'incrementMe', count: 1},
                {id: 'efgh', title: 'untouched', count: 1}
            ]
        };

        const action = {
            type: 'INCREMENT',
            id: 'abcd'
        };

        const results = counters(initialState, action);
        expect(results).to.eql({
            counters: [
                {id: 'abcd', title: 'incrementMe', count: 2},
                {id: 'efgh', title: 'untouched', count: 1}
            ]
        });
    });

    it('should decrement the counter by id', function() {
        const initialState = {
            counters: [
                {id: 'abcd', title: 'decrementMe', count: 2},
                {id: 'efgh', title: 'untouched', count: 2}
            ]
        };

        const action = {
            type: 'DECREMENT',
            id: 'abcd'
        };

        const results = counters(initialState, action);
        expect(results).to.eql({
            counters: [
                {id: 'abcd', title: 'decrementMe', count: 1},
                {id: 'efgh', title: 'untouched', count: 2}
            ]
        });
    });

    it('should update from received counters', function() {
        const action = {
            type: 'RECEIVE_COUNTERS',
            data: [
                {id: 'abcd', title: 'test', count: 3},
                {id: 'efgh', title: 'test2', count: 2},
                {id: 'ijkl', title: 'test3', count: -1}
            ]
        };

        const results = counters(undefined, action);
        expect(results).to.eql({
            counters: [
                {id: 'abcd', title: 'test', count: 3},
                {id: 'efgh', title: 'test2', count: 2},
                {id: 'ijkl', title: 'test3', count: -1}
            ]
        });
    });
});
