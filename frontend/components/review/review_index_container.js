import { connect } from "react-redux";
import { fetchReviews } from "../../actions/reviews/review_actions";
import ReviewIndex from "./review_index";


const mSTP = (state, ownProps) => {
  // debugger
  return {
    reviews: Object.values(
      state.entities.reviews
    )
  }

}

const mDTP = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mSTP, mDTP)(ReviewIndex)