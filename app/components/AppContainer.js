import React from 'react';
import {connect} from 'react-redux';

import {create, fetchCounters,
        persistIncrement, persistDecrement} from '../actions/actions';
import CounterInput from './CounterInput';
import Counter from './Counter';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchCounters());

        this.createCounter = this.createCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    createCounter(name) {
        this.props.dispatch(create(name));
    }

    incrementCounter(id) {
        this.props.dispatch(persistIncrement(id));
    }

    decrementCounter(id) {
        this.props.dispatch(persistDecrement(id));
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <CounterInput createCounter={this.createCounter}/>
                {this.props.counters.map(c =>
                    <Counter
                        key={c.id} title={c.title} cid={c.id}
                        count={c.count} inc={this.incrementCounter}
                        dec={this.decrementCounter}
                    />
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
