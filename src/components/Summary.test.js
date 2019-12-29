import React from 'react';
import { mount } from 'enzyme';
import Summary from "./Summary";
import { shallow } from 'enzyme';

it('render Component', () => {
    const component = shallow(<Summary />);
});

