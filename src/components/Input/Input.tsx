import React, { Component } from 'react';

export class Input extends Component {
  render = () => {
    return (
      <label>
        Name: <input type="text"></input>
      </label>
    );
  };
}
