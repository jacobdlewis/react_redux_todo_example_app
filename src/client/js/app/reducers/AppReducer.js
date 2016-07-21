import {FETCH_DATA_REQUEST} from '../constants';
import { Record } from 'immutable';

const defaultState = new Record({
  loading: false
});

export default function (state = new defaultState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return state.merge({ loading: true });
    default:
      return state;
  }
}
