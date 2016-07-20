import expect from 'expect';
import {FETCH_DATA_SUCCESS} from '../../constants';

import reducer from '../DashboardReducer';

describe('DashboardReducer', () => {
  const mockData = { data: 'MOCK_DATA' };

  it('initializes with no data', () => {
    const state = reducer(undefined, {});

    expect(state.get('data')).toNotExist();
  });

  it('should indicate data is loading', () => {
    const action = {
      type: FETCH_DATA_SUCCESS,
      data: mockData,
    };

    const state = reducer(undefined, action);
    expect(state.get('data')).toEqual('MOCK_DATA');
  });
});
