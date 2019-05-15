import React, { Component } from 'react';
import './SignupForm.scss';
import Loader from '../images/loader.svg';
import classNames from 'classnames';
import { any } from 'prop-types';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import FormGroup from './FormGroup/FormGroup';

interface state {
  isLoading: boolean;
  formSubmitted: boolean;
  name: string;
  email: string;
  message: string;
}

interface props {
  signUpComplete: any;
}

export class SignupForm extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      formSubmitted: false,
      name: '',
      email: '',
      message: ''
    };
  }

  signup = (evt: any) => {
    evt.preventDefault();
    this.props.signUpComplete();

    // Validate fields
    if (!(this.state.name && this.state.email && this.state.message)) {
      alert('Please fill all the required fields');
    } else {
      // Make an AJAX call to sign up
      this.setState({ isLoading: true, formSubmitted: false });
      setTimeout(() => {
        this.setState({ isLoading: false, formSubmitted: true });
      }, 3000);
    }
  };

  onChangeHandler = (evt: any) => {
    const fieldName: any = evt.target.name;
    this.setState({
      [fieldName]: evt.target.value
    } as any);
  };

  render() {
    const btnClasses = classNames('btn-submit', { 'btn-loading': this.state.isLoading });

    return (
      <div className="trial-form">
        <h2>Trial Form</h2>

        {this.state.formSubmitted ? <SuccessMessage {...this.state} /> : null}

        <form onSubmit={this.signup} id="frmTrial">
          <FormGroup onChangeHandler={this.onChangeHandler} label="Name" name="name" isLoading={this.state.isLoading} />
          <FormGroup
            onChangeHandler={this.onChangeHandler}
            label="Email"
            name="email"
            type="email"
            isLoading={this.state.isLoading}
          />
          <FormGroup
            onChangeHandler={this.onChangeHandler}
            label="Message"
            name="message"
            type="textarea"
            isLoading={this.state.isLoading}
          />
          <button type="submit" className={btnClasses}>
            {this.state.isLoading ? <img src={Loader} alt="Loading" /> : 'Sign Up'}
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
