import React from 'react';


const ListingsIndex = ({ listings }) => (
  <div>
    <h1>Listings: </h1>
    {listings.map(listing => (
      <ListingsIndexItem
        listing={listing}
        key={listing.id}
      />
    ))}
  </div>
);

export default ListingsIndex;