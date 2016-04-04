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
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)));
    };
}
