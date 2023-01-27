import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { fetchListing } from "../../actions/listings/listings.actions";
import { receiveUser } from "../../actions/user/user_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {listing: state.entities.listings[ownProps.match.params.listingId],}
  // ownerId: 
  // owner: state.entities.users[state.entities.listings[ownProps.match.params.listingId].owner_id],
  // currentUser: state.session.id
}

const mDTP = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  receiveUser: id => dispatch(receiveUser(id))
})


export default connect(mSTP, mDTP)(ListingShow)