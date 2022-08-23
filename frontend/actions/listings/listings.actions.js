import * as listingAPIUtil from '../../utils/listings_utils'

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
  listingAPIUtil.fetchListings(filters)
  .then(listings => dispatch(receiveListings(listings)))
)

export const fetchListing = id => dispatch => (
  listingAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
)

export const createListing = formListing => dispatch => (
  listingAPIUtil.createListing(formListing)
  .then(listing => dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
  listingAPIUtil.deleteListing(listingId)
  .then(() => dispatch(removeListing()))
)