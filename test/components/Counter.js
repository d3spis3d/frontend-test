import {expect} from 'chai';
import sinon from 'sinon';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Counter from '../../app/components/Counter';

describe('Counter', function() {
    it('should render correctly', function() {
        const renderer = ReactTestUtils.createRenderer();
        const inc = sinon.stub();
        const dec = sinon.stub();
        const del = sinon.stub();

        renderer.render(<Counter inc={inc} dec={dec} delete={del} title="Test" count="2" cid="abcd"/>);
        const render = renderer.getRenderOutput();

        expect(render.type).to.equal('div');

        const firstChild = render.props.children[0];
        expect(firstChild.type).to.equal('div');
        expect(firstChild.props.children).to.equal('Test');

        const secondChild = render.props.children[1];
        expect(secondChild.props.symbol).to.equal('-');
        expect(secondChild.props.click).to.equal(dec);
        expect(secondChild.props.data).to.equal('abcd');

        const thirdChild = render.props.children[2];
        expect(thirdChild.type).to.equal('div');
        expect(thirdChild.props.children).to.equal('2');

        const fourthChild = render.props.children[3];
        expect(fourthChild.props.symbol).to.equal('+');
        expect(fourthChild.props.click).to.equal(inc);
        expect(fourthChild.props.data).to.equal('abcd');

        const fifthChild = render.props.children[4];
        expect(fifthChild.props.symbol).to.equal('x');
        expect(fifthChild.props.click).to.equal(del);
        expect(fifthChild.props.data).to.equal('abcd');
    });
});
