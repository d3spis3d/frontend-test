import CounterAction from '../interfaces/counter-action';
import {receive} from './fetch';

export const INCREMENT = 'INCREMENT';

export function increment(counterId: string): CounterAction {
    return {
        type: INCREMENT,
        id: counterId
    };
}

export function persistIncrement(counterId: string) {
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
        .then(response => response.json())
        .then(counters => dispatch(receive(counters)));
    };
}
