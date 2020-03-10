import {auth, googleProvider, twitterProvider } from '../firebase';

export function googleLogin() {
  return dispatch => auth.signUpwithPopup(googleProvider);
}

export function twitterLogin() {
  return dispatch => auth.signUpwithPopup(twitterProvider);
}
