import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Task from '../Task';

describe('<Task />', () => {
  let cmpt;
  let mockTask;

  beforeEach(() => {
    mockTask = {
      name: "Do work",
      description: "exercise, programming, etc."
    }
    cmpt = shallow(<Task task={mockTask}/>);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });

  it('is the right type of element', ()=> {
    expect(cmpt.shallow().type()).toEqual('div');
  });

});
