import { RECEIVE_RESERVATIOINS, RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../../actions/reservations/reservation_actions'

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_RESERVATIOINS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      const nextState = { [action.reservation.id]: action.reservation }
      return Object.assign({}, state, nextState);
    case REMOVE_RESERVATION:
      nextState = {}
      return Object.assign({}, state, nextState)
    default:
      return state;
  }
}

export default reservationsReducer