import React from 'react';
import HomeIcon from '../../../img/sprite/home.svg';

function Greeting() {
  return (
    <div>
      <svg>
        <use xlinkHref={HomeIcon} />
      </svg>
      <span>Hello world</span>
    </div>
  );
}

export default Greeting;
