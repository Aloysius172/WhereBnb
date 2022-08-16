import {
  postUser,
  postSession,
  deleteSession
} from "../../utils/session"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

const receiveCurrentUser = currentUser => {
  // debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = formUser => dispatch => {
  // debugger
 return postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user))), 
    err => dispatch(receiveErrors(err.responseJSON))

}


export const logIn = formUser => dispatch => {
  // debugger
  return postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user))),
    err => dispatch(receiveErrors(err.responseJSON))
}


export const logOut = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
}
