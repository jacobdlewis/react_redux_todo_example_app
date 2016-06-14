import React, { Component } from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Greeting from '../Greeting';

describe('<Greeting />', function () {
  it('renders without exploding', function () {
    expect(shallow(<Greeting />).length).toEqual(1);
  });
});
