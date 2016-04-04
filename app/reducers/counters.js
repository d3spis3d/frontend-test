import {DECREMENT, INCREMENT, RECEIVE_COUNTERS} from '../actions/actions';

const initialState = {
    counters: []
};

function createCounterUpdate(adjustment, action) {
    return function(counter) {
        if (counter.id === action.id) {
            return {
                id: counter.id,
                count: counter.count + adjustment,
                title: counter.title
            }
        }
        return counter;
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            const countersWithIncrement = state.counters.map(createCounterUpdate(1, action));
            return Object.assign({}, state, {
                counters: countersWithIncrement
            });
        case DECREMENT:
            const countersWithDecrement = state.counters.map(createCounterUpdate(-1, action));
            return Object.assign({}, state, {
                counters: countersWithDecrement
            });
        case RECEIVE_COUNTERS:
            return Object.assign({}, state, {
                counters: action.data
            });
        default:
            return state;
    }
}
