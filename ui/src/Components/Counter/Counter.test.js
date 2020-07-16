import { mount } from 'enzyme';
import { Counter } from './Counter.js';
import React from 'react';

it('increment', () => {
    const component = mount(<Counter />);  
    try{
        let countSpan = component
        .find('span#counttext')

        expect(countSpan.text()).toBe('0')

        component
        .find('button#incr_btn')
        .simulate('click');
        
        expect(countSpan.text()).toBe('1')
      
    }finally{
        component.unmount();
    }
  });
  
  
  it('decrement', () => {
    const component = mount(<Counter />);  
    try{
        let countSpan = component
        .find('span#counttext')

        expect(countSpan.text()).toBe('0')

        component
        .find('button#decr_btn')
        .simulate('click');  
        
        expect(countSpan.text()).toBe('-1')
      
    }finally{
        component.unmount();
    }
  });