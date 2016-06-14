import * as ActionTypes from '../constants/ActionTypes';

export function fetchData() {
  return {
    type: ActionTypes.FETCH_DATA_REQUEST
  };
}

export function receiveData(data) {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    data
  };
}

export function fetchJson() {

  /*return dispatch => {
    dispatch(fetchData());

    return fetch(`http://localhost:3000/getJson`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));
  }*/

}
