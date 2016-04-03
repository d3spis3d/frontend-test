import {INCREMENT, DECREMENT, RECEIVE_COUNTERS} from '../actions/actions';

const initialState = {
    total: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                total: state.total + 1;
            });
        case DECREMENT:
            return Object.assign({}, state, {
                total: state.total - 1;
            });
        case RECEIVE_COUNTERS:
            const total = action.data.reduce((count, currentCounter) => count + currentCounter.count, 0);
            return Object.assign({}, state, {
                total
            });
        default:
            return state;
    }
}
