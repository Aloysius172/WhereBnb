import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../../actions/reviews/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEWS:

      return Object.assign({}, state, action.reviews)
    case RECEIVE_REVIEW:

      nextState[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:

      delete nextState[action.reviewId]
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;