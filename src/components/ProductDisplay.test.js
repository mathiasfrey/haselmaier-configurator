import React from 'react';
import { mount } from 'enzyme';
import ProductDisplay from "./ProductDisplay";
import {expectation} from "sinon";

it('render Component', () => {
    const component = mount(<ProductDisplay />);
});


