import {FETCH_DATA_SUCCESS} from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.Map({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return state.merge(action.data);
    default:
      return state;
  }
}
