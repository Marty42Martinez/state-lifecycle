import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display component', () => {
  it('creates an instance of ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay />);
    expect(wrapper).toMatchSnapshot();

  });

});
