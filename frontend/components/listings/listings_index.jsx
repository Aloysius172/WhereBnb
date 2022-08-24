import React from 'react';
import ListingsIndexItem from './listings_index_item';
// import { useEffect } from 'react';


// const ListingsIndex = props => {
//   const { listings, fetchListings } = props;
  
//   useEffect(() => {
//     debugger
//     fetchListings;
//   }, []);

//   return(
    
//     <div>
//       {listings.map((listing, i) => (
//         <ListingsIndexItem
//           listing={listing}
//           key={i}
//         />
//       ))}
//     </div>
//   )

// };

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
    debugger
    this.props.fetchListings();
  }

  render(){
    debugger
    return (

      <div>
        <div className='listings-index-div'>
          <div className='listings-index-item-div'>
          {this.props.listings.map((listing, i) => ( 
            

            listing ? <ListingsIndexItem
                listing={listing}
                key={i}
              /> : null

            
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ListingsIndex;