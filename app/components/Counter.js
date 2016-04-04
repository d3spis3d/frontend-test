import React from 'react';

import CounterButton from './CounterButton';

export default (props) => {
    return (
        <div>
            <span>{props.title}</span>
            <CounterButton symbol="-" click={props.dec} data={props.cid}></CounterButton>
            <span>{props.count}</span>
            <CounterButton symbol="+" click={props.inc} data={props.cid}></CounterButton>
            <CounterButton symbol="x"></CounterButton>
        </div>
    );
}
