import {FETCH_DATA_REQUEST} from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.Map({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return state.merge({ loading: true });
    default:
      return state;
  }
}
