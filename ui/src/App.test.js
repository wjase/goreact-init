import React from 'react';
import App from './App';
import {waitForComponentToRender} from './TestUtils.js'
import { mount } from 'enzyme';

test('renders App', () => {
  const app = mount(<App />);
  expect(app.containsMatchingElement(<h2>My Async Data</h2>)).toBeTruthy();
});

