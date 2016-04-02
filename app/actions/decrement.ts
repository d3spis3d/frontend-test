import CounterAction from '../interfaces/counter-action';
import {receive} from './fetch';

export const DECREMENT = 'DECREMENT';

export function decrement(counterId: string): CounterAction {
    return {
        type: DECREMENT,
        id: counterId
    };
}

export function persistDecrement(counterId: string) {
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
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)));
    };
}
