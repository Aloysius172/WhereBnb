import * as ReservationAPIUtil from '../../utils/reservations_utils'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
})

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
})

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
})

export const fetchReservations = () => dispatch => (
  ReservationAPIUtil.fetchReservations()
  .then(reservations => dispatch(receiveReservations(reservations)))
)

export const fetchReservation = reservationId => dispatch => (
  ReservationAPIUtil.fetchReservation(reservationId)
  .then(reservation => dispatch(receiveReservation(reservation)))
)

export const createReservation = reservation => dispatch => {
  return (
    ReservationAPIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation))))
}

export const updateReservation = reservation => dispatch => (
  ReservationAPIUtil.updateReservation(reservation)
  .then(reservation => dispatch(receiveReservation(reservation)))
)

export const deleteReservation = reservationId => dispatch => (
  ReservationAPIUtil.deleteReservation(reservationId)
  .then(() => dispatch(removeReservation(reservationId)))
)