import CounterData from '../interfaces/counter-data';

export const RECEIVE_COUNTERS = 'RECEIVE_COUNTERS';

export function receive(counters: array): CounterData {
    return {
        type: 'RECEIVE_COUNTERS',
        data: counters
    };
}

export function fetch() {
    return function(dispatch) {
        fetch('/api/v1/counters')
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)));
    }
}
