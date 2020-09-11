import React from 'react';
import { mount } from 'enzyme'; 

import Counter from './Counter.js'; 

describe('Counter', () => {
    it('should render correctly ', () => {
        const component = mount(<Counter />);
        expect(component).toMatchSnapshot();
    });
});