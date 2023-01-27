export const fetchReservations = () => {
  // debugger
  return $.ajax({
    url: 'api/reservations',
    method: 'GET',
  })
    ;
}

export const fetchReservation = id => {
  // debugger
  return $.ajax({
    url: `api/reservations/${id}`,
    method: 'GET',
  })
    ;
}

export const createReservation = reservation => (
  $.ajax({
    method: 'POST',
    url: 'api/reservations',
    data: { reservation }
  })
);

export const updateReservation = reservation => (
  $.ajax({
    method: "PATCH",
    url: `/api/reservation/${reservation.id}`,
    data: { reservation }
  })
)

export const deleteReservation = reservationId => {
  return $.ajax({
    url: `api/reservations/${reservationId}`,
    method: "DELETE"
  });
};