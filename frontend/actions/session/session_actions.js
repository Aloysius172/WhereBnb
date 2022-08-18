import {
  postUser,
  postSession,
  deleteSession
} from "../../utils/session"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const DELETE_SESSION_ERRORS = "DELETE_SESSION_ERRORS"

const receiveCurrentUser = currentUser => {
  // debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const deleteErrors = () => ({
  type: DELETE_SESSION_ERRORS
})


export const signUp = formUser => dispatch => {
  // debugger
 return postUser(formUser)
    .then(user =>( dispatch(receiveCurrentUser(user))), 
    error => (dispatch(receiveErrors(error.responseJSON)))
)
}


export const logIn = formUser => dispatch => {
  // debugger
  return postSession(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error.responseJSON))))
}

export const logOut = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
}
