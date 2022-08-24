import * as ListingAPIUtil from '../../utils/listings_utils'

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVE_LISTING"

export const receiveListings = listings =>{
  debugger
  return{
  type: RECEIVE_LISTINGS,
  listings
  }
}

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
})

export const removeListing = () => ({
  type: REMOVE_LISTING
})

export const fetchListings = ()=> dispatch =>{
  debugger
  return ListingAPIUtil.fetchListings()
  .then(listings => dispatch(receiveListings(listings)))
}


export const fetchListing = id => dispatch => {
  // debugger
  return ListingAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
}


export const createListing = formListing => dispatch => {
  // debugger
  return ListingAPIUtil.createListing(formListing)
  .then(listing => dispatch(receiveListing(listing)))
}


export const deleteListing = listingId => dispatch => (
  listingAPIUtil.deleteListing(listingId)
  .then(() => dispatch(removeListing()))
)