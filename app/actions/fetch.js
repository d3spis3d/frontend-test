export const RECEIVE_COUNTERS = 'RECEIVE_COUNTERS';

export function receive(counters) {
    return {
        type: 'RECEIVE_COUNTERS',
        data: counters
    };
}

export function fetchCounters() {
    return function(dispatch) {
        return fetch('/api/v1/counters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error retrieving counters');
            }
            return response;
        })
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)))
        .catch(error => console.log(error));
    }
}
