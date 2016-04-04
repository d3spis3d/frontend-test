import React from 'react';

export default (props) => {
    return (
        <div className="total">
            <span className="total-label">Total:</span>
            <span>{props.total}</span>
        </div>
    );
}
