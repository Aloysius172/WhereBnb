import { connect } from "react-redux";
import { createReview } from "../../actions/reviews/review_actions";
import ReviewForm from "./review_form";
 

const mSTP = (state, ownProps) => {
  // debugger
  return{
    reviewer_id: state.session.id, 
    // reviewed_listing_id: null
  }

}

const mDTP = dispatch => {
  return{
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(mSTP, mDTP)(ReviewForm)