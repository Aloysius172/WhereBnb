
import { RECEIVE_CURRENT_USER } from "../../actions/session/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../../actions/user/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    // case RECEIVE_USERS:
    //   const nextState = Object.assign({}, state )
    //   console.log(action.users)
    //   action.users.map((user) => {
    //      nextState[user.id] = user 
    //   })
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user }); 
    default:
      return state;
  }
}

export default usersReducer;