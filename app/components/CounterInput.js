import React from 'react';

export default class CounterInput {
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="create" placeholder="Counter name" value={this.state.counterName} onChange={this.handleNameChange}>
                <button type="submit">Create</button>
            </form>
        );
    }
}
