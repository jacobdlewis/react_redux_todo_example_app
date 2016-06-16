import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return (
      <div>
        <svg>
          <use xlinkHref="#home" />
        </svg>
        <span>Hello world</span>
      </div>
    );
  }
}

export default Greeting;
