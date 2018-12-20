import React from 'react';
import { shallow } from 'enzyme';

import CurrencyCard from './CurrencyCard';

function setup() {
  const props = {
    currenciesData: { rates: [{ USD: 1 }] },
  };
  const wrapper = shallow(<CurrencyCard {...props} />).dive();
  const children = wrapper.props().children;
  return { wrapper, props, children };
}

describe('Layout CurrencyCard', () => {
  it('Should render CurrencyCard component', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
  it('Should have Six Currency Exchange menu items', () => {
    const { wrapper } = setup();
    wrapper.setProps({
      currenciesData: { rates: [{ USD: 1 }, { EUR: 1.13 }] },
    });
    const CurrencyItemsEl = wrapper.find('WithStyles(MenuItem)');
    expect(CurrencyItemsEl.getElements()).toHaveLength(6);
  });

  it('Should have One in Currency Rate in menu item', () => {
    const { wrapper } = setup();
    const CurrencyTypeEl = wrapper.find('.menuItem');
    expect(CurrencyTypeEl.props().value.USD).toEqual(1);
  });
});
