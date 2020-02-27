import { GET_NOTES } from '../actionTypes';
import { database } from '../firebase';

export function getNotes() {
  //dispatch the action to the reducer
  return dispatch() => {
    //get data from firebase
    database.on('value', snapshot => {
      //dispatch the type and payload to thne reducer
      dispatch({
        type: 'GET_NOTES',
        payload: snapshot.val()
      })
    })
  }
}
