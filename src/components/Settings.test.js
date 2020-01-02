import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon  from 'sinon';
import Settings from "./Settings";

// Test parent component isolated from child components
// Shallow rendering
describe('Settings', function () {
    it('Shallow Settings.js', () => {
    const component = shallow(<Settings />);
});
});


// Full rendering, for components that interact with the DOM
it('Mounting Settings.js', function () {
    const wrapper = mount(<Settings />);
});





