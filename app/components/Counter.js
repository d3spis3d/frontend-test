import React from 'react';

import CounterButton from './CounterButton';

export default (props) => {
    return (
        <div className="counter">
            <div className="title">{props.title}</div>
            <CounterButton symbol="-" click={props.dec} data={props.cid}></CounterButton>
            <div className="count">{props.count}</div>
            <CounterButton symbol="+" click={props.inc} data={props.cid}></CounterButton>
            <CounterButton symbol="x" click={props.delete} data={props.cid}></CounterButton>
        </div>
    );
}
