import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('contains a title', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.title')).toHaveLength(1);
  });

  it('contains navigation links', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('a')).toHaveLength(6);
  });

  it('contains a logout button', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.logout')).toHaveLength(1);
  });

  it('calls the logout function when the logout button is clicked', () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(<Navbar logout={mockLogout} />);
    wrapper.find('.logout').simulate('click');
    expect(mockLogout).toHaveBeenCalled();
  });
});
