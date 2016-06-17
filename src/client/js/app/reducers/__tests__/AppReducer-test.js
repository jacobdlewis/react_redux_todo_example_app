import expect from 'expect';
import * as ActionTypes from '../../constants/ActionTypes';

import reducer from '../AppReducer';

describe('AppReducer', () => {

  it('initializes with no data', () => {
    const state = reducer(undefined, {});

    expect(state.get('data')).toNotExist();
  });

  it('should indicate data is loading', () => {
    const action = {
      type: ActionTypes.FETCH_DATA_REQUEST,
    };

    const state = reducer(undefined, action);
    expect(state.get('loading')).toEqual(true);
  });
});
