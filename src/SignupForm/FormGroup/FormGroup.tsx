import React, { Component } from 'react';

interface props {
  label: string;
  name: string;
  onChangeHandler: (props: any) => void;
  type?: string;
  isLoading?: boolean;
}

export default class FormGroup extends Component<props, {}> {
  render() {
    return (
      <div className="form-group">
        <span className="label">{this.props.label}</span>

        {this.props.type === 'textarea' ? (
          <textarea
            placeholder={this.props.name}
            name={this.props.name}
            onChange={this.props.onChangeHandler}
            disabled={this.props.isLoading}
            required
          />
        ) : (
          <input
            type={this.props.type === 'email' ? 'email' : 'text'}
            placeholder={this.props.name}
            name={this.props.name}
            onChange={this.props.onChangeHandler}
            disabled={this.props.isLoading}
            required
          />
        )}
      </div>
    );
  }
}
