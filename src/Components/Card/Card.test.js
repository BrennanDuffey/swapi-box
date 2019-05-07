import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import React from 'react';
import Card from './Card.js';

describe('Card', () => {
  let wrapper;

  it('matches snapshot when people is selected', () => {
    wrapper = shallow(<Card selected="people"/>);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('matches snapshot when planets is selected', () => {
    wrapper = shallow(<Card selected="planets"/>);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('matches snapshot when vehicles is selected', () => {
    wrapper = shallow(<Card selected="vehicles"/>);
    expect(wrapper).toMatchSnapshot();
  });
})