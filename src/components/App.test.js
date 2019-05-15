import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders an App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
  
  it('changes color on a selectColor event', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().selectColor('purple');

    expect(wrapper.state('color')).toEqual('purple');
  });

});
