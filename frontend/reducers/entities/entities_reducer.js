import { combineReducers } from "redux";
import listingsReducer from "../listings/listings_reducer";
import usersReducer from "../users/users_reducer";

const entitiesReducer = combineReducers ({
  users: usersReducer,
  listings: listingsReducer
});

export default entitiesReducer