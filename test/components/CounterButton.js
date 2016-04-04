import {expect} from 'chai';
import sinon from 'sinon';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import CounterButton from '../../app/components/CounterButton';

describe('CounterButton', function() {
    it('should correctly render with symbol and click function', function() {
        const renderer = ReactTestUtils.createRenderer();
        const click = sinon.stub();
        renderer.render(<CounterButton symbol="+" click={click} data="abcd"/>);
        const render = renderer.getRenderOutput();

        expect(render.type).to.equal('button');
        expect(render.props.children).to.equal('+');
        expect(render.props.onClick).to.be.a('function');

        render.props.onClick();
        expect(click.calledWith('abcd')).to.equal(true);
    });
});
