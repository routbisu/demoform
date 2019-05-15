import React, { Component } from 'react';
import { mount } from 'enzyme';
import SignupForm from './SignupForm';

describe('Signup Form', () => {
  let mockFn = jest.fn();

  const evt = {
    preventDefault: () => {}
  };

  const form = mount(<SignupForm signUpComplete={mockFn} />);

  it('renders properly', () => {
    expect(form).toMatchSnapshot();
  });

  it('Check signup', () => {
    form.setState({
      name: 'Biswa',
      email: 'bis@gmail.com',
      message: 'Some message'
    });
    form.find('#frmTrial').simulate('submit', evt);
    expect(mockFn).toBeCalled();
  });
});
