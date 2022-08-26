# json.partial! '/api/listings/listing', listing: @listing
# owner = @listing.owner
  json.partial! 'listing', listing: @listing
   json.username @listing.owner.username
   json.ownerId @listing.owner.id
   