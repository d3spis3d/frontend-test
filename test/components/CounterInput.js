import {expect} from 'chai';
import sinon from 'sinon';

import testdom from 'testdom';
testdom('<html><body></body></html>');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import CounterInput from '../../app/components/CounterInput';

describe('CounterInput', function() {
    it('should render correctly', function() {
        const createCounter = sinon.stub();
        const component = ReactTestUtils.renderIntoDocument(
            <CounterInput createCounter={createCounter}/>
        );

        const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
        const formNode = ReactDOM.findDOMNode(form);

        expect(formNode.children.length).to.equal(2);

        const inputs = formNode.querySelectorAll('input');
        expect(inputs.length).to.equal(1);
        expect(inputs[0].value).to.equal('');

        const buttons = formNode.querySelectorAll('button')
        expect(buttons.length).to.equal(1);
        expect(buttons[0].textContent).to.equal('Create');
    });

    it('should update state with input change', function() {
        const createCounter = sinon.stub();
        const component = ReactTestUtils.renderIntoDocument(
            <CounterInput createCounter={createCounter}/>
        );

        const input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
        const inputNode = ReactDOM.findDOMNode(input);
        ReactTestUtils.Simulate.change(input, {target: { value: 'test counter'}});

        expect(component.state).to.eql({counterName: 'test counter'});
    });

    it('should submit correctly', function() {
        const createCounter = sinon.stub();
        const component = ReactTestUtils.renderIntoDocument(
            <CounterInput createCounter={createCounter}/>
        );

        const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
        component.setState({counterName: 'test counter'});
        const formNode = ReactDOM.findDOMNode(form);

        ReactTestUtils.Simulate.submit(formNode);
        expect(createCounter.calledWith('test counter')).to.equal(true);
    });
});
