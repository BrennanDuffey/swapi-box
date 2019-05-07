import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import React from 'react';
import Card from './CardContainer.js';

describe('CardContainer', () => {
  it.skip('should match snapshot', () => {
    let wrapper = shallow(<CardContainer />)
    expect(wrapper).toMatchSnapshot();
  });
});