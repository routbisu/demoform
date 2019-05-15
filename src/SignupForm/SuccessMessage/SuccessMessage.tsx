import React from 'react';

export default function SuccessMessage(props: any) {
  return (
    <div className="success-message">
      Your sign up is complete with the following details:
      <ul>
        <li>
          <span>Name:</span> {props.name}
        </li>
        <li>
          <span>Email:</span> {props.email}
        </li>
        <li>
          <span>Message:</span> {props.message}
        </li>
      </ul>
    </div>
  );
}
