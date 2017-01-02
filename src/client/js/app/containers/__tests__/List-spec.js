import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import List from '../List';

const mockStore = configureStore();

describe('<List />', () => {
  let cmpt;
  const initialState = {
    app: fromJS({
      tasks: [] 
    })
  };

  const store = mockStore(initialState);

  beforeEach(() => {
    cmpt = shallow(<List store={store}/>);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });
});
