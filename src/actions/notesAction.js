import { GET_NOTES, NOTES_STATUS } from '../actionTypes';
import { database } from '../firebase';

export function getNotes() {
  //dispatch the action to the reducer
  return dispatch => {
    //Set loading to true before notes are loaded
    dispatch({
      type: NOTES_STATUS,
      payload: true
    });

    //get data from firebase
    database.on('value', snapshot => {
      //dispatch the type and payload to the reducer
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val()
      });
      //Set loading to false as after loading notes
      dispatch({
        type: NOTES_STATUS,
        payload: false
      });
    }, {
      //Wait until something changes and try again
      dispatch({
        type: NOTES_STATUS,
        payload: -1
      });
    });
  }
}

export function saveNote(note) {
  return dispatch => database.push(note);

}

export function deleteNote(id) {
  return dispatch => database.child(id).remove();
}
