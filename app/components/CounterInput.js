import React from 'react';

export default class CounterInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counterName: ''};
    }

    handleNameChange(e) {
        this.setState({counterName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = this.state.counterName.trim();
        if (!name) {
            return;
        }
        this.props.createCounter(name);
        this.setState({counterName: ''});
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" name="create" placeholder="Counter name" value={this.state.counterName} onChange={e => this.handleNameChange(e)}></input>
                <button className="create-counter" type="submit">Create</button>
            </form>
        );
    }
}
