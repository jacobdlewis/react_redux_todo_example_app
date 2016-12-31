import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from '../List';

describe('<List />', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<List />);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });
});
