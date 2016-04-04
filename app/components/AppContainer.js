import React from 'react';
import {connect} from 'react-redux';

import {create, fetchCounters, persistIncrement,
        persistDecrement, deleteCounter} from '../actions/actions';
import CounterInput from './CounterInput';
import Counter from './Counter';
import CountersTotal from './CountersTotal';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchCounters());

        this.createCounter = this.createCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.deleteCounter = this.deleteCounter.bind(this);
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

    deleteCounter(id) {
        this.props.dispatch(deleteCounter(id));
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
                        dec={this.decrementCounter} delete={this.deleteCounter}
                    />
                )}
                <CountersTotal total={this.props.total}/>
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
