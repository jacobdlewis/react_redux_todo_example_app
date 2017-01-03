import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TasksNew from '../TasksNew';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';

const mockStore = configureStore();
const initialState = {
    app: fromJS({})
  };

const store = mockStore(initialState);

describe('<TasksNew />', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<TasksNew store={store}/>);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });

});
