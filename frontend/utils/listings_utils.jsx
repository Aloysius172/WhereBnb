export const fetchListings = () => {
  // debugger
  return $.ajax({
    url: 'api/listings',
    method: 'GET',
  })
;
}

export const fetchListing = id => {
  // debugger
  return $.ajax({
    url: `api/listings/${id}`,
    method: 'GET'
  })
};

// export const createReview = review => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data: { review }
//   })
// );

// export const createListing = formListing => {
//   // debugger
//   return $.ajax({
//     url: 'api/listings',
//     method: 'POST',
//     data: formListing,
//     contentType: false,
//     processData: false
//   })
// };

export const deleteListing = (listingId) => {
  return $.ajax({
    url: `api/listings/${listingId}`,
    method: "DELETE"
  });
};