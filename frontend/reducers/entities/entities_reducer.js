import { combineReducers } from "redux";
import listingsReducer from "../listings/listings_reducer";
import usersReducer from "../users/users_reducer";
import reservationsReducer from "../reservations/reservations_reducer";
import reviewsReducer from "../reviews/reviews_reducer"

const entitiesReducer = combineReducers ({
  users: usersReducer,
  listings: listingsReducer,
  reservations: reservationsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer