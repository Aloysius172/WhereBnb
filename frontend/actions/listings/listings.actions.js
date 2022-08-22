import { fetchListings, fetchListing, createListing, deleteListing } from '../../utils/listings_utils'

export const RECEIVE_LISTINGS = "RECEIVE_ALL_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVE_LISTING"

export const receiveListings = listings =>({
  type: RECEIVE_LISTINGS,
  listings
})

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
})

export const removeListing = () => ({
  type: REMOVE_LISTING
})

export const fetchListings = filters => dispatch =>(
  fetchListings(filters)
  .then(listings => dispatch(receiveListings(listings)))
)

export const fetchListing = id => dispatch => (
  fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
)

export const createListing = formListing => dispatch => (
  createListing(formListing)
  .then(listing => dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
  deleteListing(listingId)
  .then(() => dispatch(removeListing()))
)