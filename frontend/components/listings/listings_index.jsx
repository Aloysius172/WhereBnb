import React from 'react';
import ListingsIndexItem from './listings_index_item';
import { Link } from 'react-router-dom';


// const ListingsIndex = () => (
//   <div className='listings-index-div'>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem/>
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
//     <div className='listings-index-item-div'>
//       <ListingsIndexItem />
//     </div>
   
//   </div>
// )

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchListings();
  }

  render(){
    // debugger
    return (

      <div className='listings-index-div'>

          {this.props.listings.map((listing, i) => ( 
            <Link to={`api/listings/${listing.id}`} className='listings-index-item-div'>
            
            <ListingsIndexItem
                listing={listing}
                key={i}
            /> 
            
            </Link>
            ))}
      </div>
      
    )
  }
}

export default ListingsIndex;