import React, { Component } from 'react';
import HomeIcon from '../../../img/sprite/home.svg';

class Greeting extends Component {
  render() {
    return (
      <div>
        <svg>
          <use xlinkHref={HomeIcon} />
        </svg>
        <span>Hello world</span>
      </div>
    );
  }
}

export default Greeting;
