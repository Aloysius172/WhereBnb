import React from "react";
import ReservationFormContainer from "../reservations/reservation_form_container";
import ReviewFormContainer from "../review/review_form_container"
import ReviewIndexContainer from "../review/review_index_container"

class ListingShow extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount() {
    // debugger
    this.props.fetchListing(this.props.match.params.listingId)
    // this.props.receiveUser(this.props.listing.owner_id)
  }


  render(){
    const listing = this.props.listing ? this.props.listing : {'title': 'loading...'}
    // const ownerId = this.props.listing.owner_id ? this.props.listing.owner_id : {}
    // debugger
    return(
      <div className="listings-show-div">
        <h1 className="listing-show-title">
          {listing.title}
        </h1>
        <div className='listing-image-display'>
          <div className="big-image-div">
            <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="big-image" />
          </div>
          <div className="little-image-div">
            <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
            <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
            <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
            <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
          </div>

        </div>
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
        <div className="listing-show-reservation-form-container">
          <ReservationFormContainer listing={this.props.listing}/>
        </div>
        <div className="listing-show-review-form-container">
          <ReviewFormContainer reviewed_listing_id={this.props.listing.id}/>
        </div>
        <div className="listing-show-review-index-container">
          <ReviewIndexContainer listing={listing}/>
        </div>
      </div>
    )
  }
}

// class ListingShow extends React.Component {
//   componentDidMount() {
//     this.props.fetchListing(this.props.match.params.listingId);
//   }

//   render() {
//     const listing = this.props.listing ? this.props.listing : { title: 'loading...' };

//     return (
//       <div className="listing-show-container">
//         <h1 className="listing-show-title">{listing.title}</h1>
//         <div className="listing-image-display">
//           <div className="big-image-div">
//             <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="big-image" />
//           </div>
//           <div className="little-image-div">
//             <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
//             <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
//             <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
//             <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" alt="" className="little-image" />
//           </div>
//         </div>
//         <div className="listing-show-information">
//           <span className="listing-show-owner">Entire home hosted by {listing.username}</span>
//           <ul>
//             <li>{listing.rooms} rooms</li>
//             <li>{listing.beds} beds</li>
//             <li>{listing.bathrooms} bathrooms</li>
//           </ul>
//           <span className="listing-show-description">{listing.description}</span>
//         </div>
//         <div className="listing-show-reservation-form-container">
//           <ReservationFormContainer listing_id={this.props.listing.id} />
//         </div>
//         <div className="listing-show-review-form-container">
//           <ReviewFormContainer reviewed_listing_id={this.props.listing.id} />
//         </div>
//         <div className="listing-show-review-index-container">
//           <ReviewIndexContainer listing={listing} />
//         </div>
//       </div>
//     );
//   }
// }


export default ListingShow
