import * as UserUtils from '../../utils/users_utils'
export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUsers = users => {
  return{
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUsers = () => dispatch => {
  return UserUtils.fetchUsers()
  .then(users =>{dispatch(receiveUsers(users))
    console.log(users)
}  )
}

export const fetchUser = id => dispatch => {
  return UserUtils.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
}