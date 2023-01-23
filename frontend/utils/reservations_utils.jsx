export const fetchReservations = () => {
  // debugger
  return $.ajax({
    url: 'api/reservations',
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