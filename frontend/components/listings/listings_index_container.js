import React from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { fetchListings } from "../../actions/listings/listings.actions";
import ListingsIndex from "./listings_index";

const mSTP = (state) => {
  debugger
  return{
    listings: 
    Object.values(
      state.entities.listings
      )
  }
}

const mDTP = dispatch => {
  debugger
  return{
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(mSTP, mDTP)(ListingsIndex);