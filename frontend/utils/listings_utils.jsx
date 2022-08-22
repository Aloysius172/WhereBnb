export const fetchListings = () => (
  $.ajax({
    url: 'api/listings',
    method: 'GET',
  })
);

export const fetchListing = id => (
  $.ajax({
    url: `api/listings/${id}`,
    method: 'GET'
  })
);

// export const createReview = review => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data: { review }
//   })
// );

export const createListing = listingForm => (
  $.ajax({
    url: 'api/listings',
    method: 'POST',
    data: listingForm,
    contentType: false,
    processData: false
  })
);

export const deleteListing = (listingId) => {
  return $.ajax({
    url: `api/listings/${listingId}`,
    method: "DELETE"
  });
};