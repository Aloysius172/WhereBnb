import * as ReviewAPIUtil from '../../utils/reviews_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchReviews = () => dispatch => (
  ReviewAPIUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)


export const createReview = review => dispatch => {
  return (
    ReviewAPIUtil.createReview(review)
      .then(review => dispatch(receiveReview(review))))
}

export const updateReview = review => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = reviewId => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)