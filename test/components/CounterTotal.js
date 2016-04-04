import {expect} from 'chai';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import CountersTotal from '../../app/components/CountersTotal';

describe('CountersTotal', function() {
    it('should correctly render with total', function() {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<CountersTotal total="10"/>);
        const render = renderer.getRenderOutput();

        expect(render.type).to.equal('div');

        const firstChild = render.props.children[0];
        expect(firstChild.type).to.equal('span');
        expect(firstChild.props.children).to.equal('Total:');

        const secondChild = render.props.children[1];
        expect(secondChild.type).to.equal('span');
        expect(secondChild.props.children).to.equal('10');
    });
});
