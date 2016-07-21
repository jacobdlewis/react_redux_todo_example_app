import { FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from '../constants';

export function fetchData() {
  return {
    type: FETCH_DATA_REQUEST,
    payload: { 'abc': 123 }
  };
}

export function receiveData(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  };
}

export function fetchJson() {

  /* return dispatch => {
    dispatch(fetchData());

    return fetch(`http://localhost:3000/getJson`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));
  }*/

}
