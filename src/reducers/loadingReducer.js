import { USER_STATUS, NOTES_STATUS } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_STATUS:
      return { ...state, notes: action.payload }
    case NOTES_STATUS:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}
