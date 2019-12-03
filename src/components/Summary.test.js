import React from 'react';
import { mount } from 'enzyme';
import Summary from "./Summary";
var enzyme  = require('enzyme');

it('render Component', () => {
    const component = mount(<Summary />);
});

