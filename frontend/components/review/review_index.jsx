import React from 'react'
import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchReviews()
    console.log(this.props.reviews)
  }
  

  render(){
    const reviews = this.props.reviews 
    const filteredReviews = []
    let totalRating = 0
    reviews.map((review, i) => {
      if (review.reviewed_listing_id === this.props.listing.id) {
        filteredReviews.push(review)
        totalRating += review.rating
      }
    })

    let avgRating = (totalRating / filteredReviews.length).toFixed(2)
    
    return(

      <div className='review-index-div'>
        <h1>Rating: {avgRating}</h1>
        {filteredReviews.map((filteredReview, i) => (
          <ReviewIndexItem className='review-index-item-container' review={filteredReview} key={filteredReview.id}/>
        ))}
      </div>

    
    )
    
  }
}


export default ReviewIndex