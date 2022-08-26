import React from "react";

class ListingShow extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount() {
    debugger
    this.props.fetchListing(this.props.match.params.listingId)
    // this.props.receiveUser(this.props.listing.owner_id)
  }


  render(){
    const listing = this.props.listing ? this.props.listing : {'title': 'loading...'}
    // const ownerId = this.props.listing.owner_id ? this.props.listing.owner_id : {}
    debugger
    return(
      <div className="listings-show-div">
        <h1 className="listing-show-title">
          {listing.title}
        </h1>
        <div className="listing-show-information" >
          <span className="listing-show-owner">Entire home hosted by {listing.username}</span> 
          <ul>
            This {listing.property_type} includes:
            <li>{listing.rooms} rooms</li>
            <li>{listing.beds} beds</li>
            <li>{listing.bathrooms} bathrooms</li>
          </ul>
          <span className="listing-show-description">{listing.description}</span>
        </div>
      </div>
    )
  }
}


export default ListingShow
