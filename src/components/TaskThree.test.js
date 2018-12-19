import React from 'react';
import { shallow } from 'enzyme';

import TaskThree from './TaskThree';

function setup() {
  const wrapper = shallow(<TaskThree />).dive();
  return { wrapper };
}

describe('Layout TaskThree', () => {
  it('Should render TaskThree component', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
