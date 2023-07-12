import { connect } from "react-redux";
import { fetchListing } from "../../actions/listings/listings.actions";
import { createReservation } from "../../actions/reservations/reservation_actions";
import ReservationForm from "./reservation_form";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    // listing_id: ownProps.match,
    reserver_id: state.session.id
    
}}

const mDTP = dispatch => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  fetchListing: (listing) => dispatch(fetchListing(listing))
  
})


export default connect(mSTP, mDTP)(ReservationForm)
