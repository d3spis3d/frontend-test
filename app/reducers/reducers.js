import {combineReducers} from 'redux';

import counters from './counters';
import total from './total';

const rootReducer = combineReducers({
    counters,
    total
});

export default rootReducer;
