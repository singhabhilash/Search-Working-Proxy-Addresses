import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import HomePage from '../../app/containers/HomePage';

describe('HomePageContainer', () => {
  it('should render Home', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.containsAllMatchingElements([
      <Home />
    ])).to.equal(true);
  });
});