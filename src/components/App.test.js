import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('App Component', () => {
  it('renders an App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});