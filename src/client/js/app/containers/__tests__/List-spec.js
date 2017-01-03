import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import List from '../List';
import Task from '../../components/Task';

const mockStore = configureStore();

describe('<List />', () => {
  let cmpt;
  const mockTasks = [
    {
      "id": 1,
      "name": "Work out",
      "description": "Do sit ups",
      "completed": false
    },
    {
      "id": 2,
      "name": "Get groceries",
      "description": "fruit, veggies, beans",
      completed: false
    }
  ]
  const initialState = {
    app: fromJS({
      tasks: mockTasks
    })
  };
  

  const store = mockStore(initialState);

  beforeEach(() => {
    cmpt = shallow(<List store={store}/>);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });

  it('renders the right number of Tasks based on state', ()=> {
    expect(cmpt.shallow().find(Task).length).toEqual(2);
  });

  it('is the right type of element', ()=> {
    expect(cmpt.shallow().type()).toEqual('div');
  });


});
