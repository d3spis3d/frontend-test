import {receive} from './fetch';

export const DELETE = 'DELETE';

export function deleteCounter(id) {
    return function(dispatch) {
        return fetch('/api/v1/counter', {
            method: 'DELETE',
            body: JSON.stringify({id: id}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)));
    }
}
