import React from 'react';
import { shallow } from 'enzyme';

import TaskThree from './TaskThree';

function setup() {
  const props = {
    currenciesData: [{ rates: [{ USD: 1 }] }],
  };
  const wrapper = shallow(<TaskThree.WrappedComponent />).dive();
  const children = wrapper.props().children;
  return { wrapper, props, children };
}

describe('Layout TaskThree', () => {
  it('Should render TaskThree component', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render CurrencyCard Component', () => {
    const { wrapper } = setup();
    const element = wrapper.find('WithStyles(CurrencyCard)');
    expect(element.exists()).toBe(true);
  });
});
