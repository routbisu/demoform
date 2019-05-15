import React, { Component } from 'react';
import SignupForm from './SignupForm/SignupForm';
import './App.scss';

class App extends Component {
  public render() {
    return (
      <div className="main-container">
        <SignupForm
          signUpComplete={() => {
            console.log('Signup completed');
          }}
        />
      </div>
    );
  }
}

export default App;
