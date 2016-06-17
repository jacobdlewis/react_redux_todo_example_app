import * as ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.Map({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return state.merge({ loading: true });
    default:
      return state;
  }
}
