import React from 'react';

export default (props) => {
    return (
        <button onClick={e => props.click(props.data)}>{props.symbol}</button>
    );
}
