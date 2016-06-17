import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Greeting from '../Greeting';

describe('<Greeting />', () => {
  it('renders without exploding', () => {
    expect(shallow(<Greeting />).length).toEqual(1);
  });
});
