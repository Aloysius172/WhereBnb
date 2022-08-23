import {RECEIVE_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from '../../actions/listings/listings.actions'

const listingsReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
       const nextState =  {[action.listing.id]: action.listing}
      return Object.assign({}, state, nextState);
    case REMOVE_LISTING:
      nextState = {}
      return Object.assign({}, state, nextState)
    default:
      return state;
  }
}

export default listingsReducer