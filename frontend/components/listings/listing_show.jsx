import React from "react";

class ListingShow extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    // this.props.receiveUser(this.props.ownerId)
  }


  render(){
    return(
      <div>
        <span>
          {/* {this.props.listing.title} */}
          {/* {this.props.owner} */}
          {}
        </span>
        show 
      </div>
    )
  }
}

export default ListingShow