import React from 'react';

import CounterButton from './CounterButton';

export default (props) => {
    return (
        <div>
            <span>{props.title}</span>
            <CounterButton symbol="-"></CounterButton>
            <span>{props.count}</span>
            <CounterButton symbol="+"></CounterButton>
            <CounterButton symbol="x"></CounterButton>
        </div>
    );
}
