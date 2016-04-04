import {receive} from './fetch';

export const CREATE = 'CREATE';

export function create(name) {
    return function(dispatch) {
        return fetch('/api/v1/counter', {
            method: 'POST',
            body: JSON.stringify({title: name}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error creating counter');
            }
            return response;
        })
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)))
        .catch(error => console.log(error));
    };
}
