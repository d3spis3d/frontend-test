import React from 'react';
import {connect} from 'react-redux';

import {create, fetchCounters} from '../actions/actions';
import CounterInput from './CounterInput';
import Counter from './Counter';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchCounters());
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
                {this.props.counters.map(c =>
                    <Counter key={c.id} title={c.title} count={c.count}/>
                )}
            </div>
        );
    }
}

function select(state) {
    return {
        counters: state.counters.counters,
        total: state.total.total
    };
}

export default connect(select)(AppContainer);
