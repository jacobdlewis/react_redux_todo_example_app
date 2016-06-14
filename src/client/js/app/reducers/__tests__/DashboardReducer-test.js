import Immutable from 'immutable';
import expect from 'expect';
import * as ActionTypes from '../../constants/ActionTypes';

import reducer from '../DashboardReducer';

describe('DashboardReducer', () => {

  let mockData = { data: 'MOCK_DATA' };

  it('initializes with no data', () => {
    let state = reducer(undefined, {});

    expect(state.get('data')).toNotExist();
  });

  it('should indicate data is loading', () => {
    let action = {
      type: ActionTypes.FETCH_DATA_SUCCESS,
      data: mockData,
    };

    let state = reducer(undefined, action);
    expect(state.get('data')).toEqual('MOCK_DATA');
  });

});
