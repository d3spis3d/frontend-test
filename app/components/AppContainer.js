import React from 'react';
import {connect} from 'react-redux';

import {create} from '../actions/create';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createCounter = this.createCounter.bind(this);
    }

    createCounter(name) {
        this.props.dispatch(create(name));
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <CounterInput createCounter={this.createCounter}/>
            </div>
        );
    }
}

function select(state) {
    return {
        counters: state.counters,
        total: state.total
    };
}

export default connect(select)(AppContainer);
