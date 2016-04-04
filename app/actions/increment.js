import {receive} from './fetch';

export const INCREMENT = 'INCREMENT';

export function increment(counterId) {
    return {
        type: INCREMENT,
        id: counterId
    };
}

export function persistIncrement(counterId) {
    return function(dispatch) {
        dispatch(increment(counterId));

        return fetch('/api/v1/counter/inc', {
            method: 'POST',
            body: JSON.stringify({id: counterId}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error incrementing counter');
            }
            return response;
        })
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)))
        .catch(error => console.log(error));
    };
}
