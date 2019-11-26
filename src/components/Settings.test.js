import React from 'react';
import { shallow } from 'enzyme';
import sinon  from 'sinon';
import { mount } from 'enzyme';
import Settings from "./Settings";

// Test parent component isolated from child components
// Shallow rendering
it('Shallow Settings.js', () => {
    const component = shallow(<Settings />);
});

// Full rendering, for components that interact with the DOM
it('Mounting Settings.js', function () {
    const wrapper = mount(<Settings />);
});





