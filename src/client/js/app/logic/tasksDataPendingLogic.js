import { createLogic } from 'redux-logic';
import { TASKS_DATA_PENDING } from '../constants';
import { tasksDataSuccess, tasksDataError } from '../actions/AppActions';

export const tasksDataPendingLogic = createLogic({
  type: TASKS_DATA_PENDING,
  latest: true, // take latest only

  processOptions: {
    dispatchReturn: true
  },

  process({ httpClient, action }) {
    return httpClient.get('http://localhost:3000/tasks')
      .then(resp => (resp.data) )
      .then(tasks => tasksDataSuccess(tasks))
      .catch(err => {
        console.log(err);
        tasksDataError(err)
      });
  }
});

export default [
  tasksDataPendingLogic
];
