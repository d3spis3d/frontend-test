import {receive} from './fetch';

export const DECREMENT = 'DECREMENT';

export function decrement(counterId) {
    return {
        type: DECREMENT,
        id: counterId
    };
}

export function persistDecrement(counterId) {
    return function(dispatch) {
        dispatch(decrement(counterId));

        return fetch('/api/v1/counter/dec', {
            method: 'POST',
            body: JSON.stringify({id: counterId}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error decrementing counter');
            }
            return response;
        })
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)))
        .catch(error => console.log(error));
    };
}
