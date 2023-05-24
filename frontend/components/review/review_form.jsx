import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: '',
      // rating: 0,
      cleanliness: 6,
      communication: 6,
      check_in: 6,
      accuracy: 6,
      location: 6,
      value: 6,
      errors: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body === '' ||
        this.state.cleanliness === "" ||
        this.state.communication === "" ||
        this.state.check_in === "" ||
        this.state.accuracy === "" ||
        this.state.location === "" ||
        this.state.value === "" ) {
      this.setState({ errors: "Please fill out all required fields" }) 
    }
    else{
      
    const review = {
      rating: ((parseInt(this.state.cleanliness) +
          parseInt(this.state.communication) +
          parseInt(this.state.check_in) +
          parseInt(this.state.accuracy) +
          parseInt(this.state.location) +
          parseInt(this.state.value)) /
        6.0).toFixed(2),
      reviewed_listing_id: this.props.reviewed_listing_id,
      reviewer_id: this.props.reviewer_id,
      body: this.state.body,
      // rating: this.state.rating,
      cleanliness: this.state.cleanliness,
      communication: this.state.communication,
      check_in: this.state.check_in,
      accuracy: this.state.accuracy,
      location: this.state.location,
      value: this.state.value,
        
      
    };
    this.props.createReview(review)
    }
    

   

  }
    
  render(){
    if (this.state.errors){
      return(
        <div className="review-form-div">
          review form
          <form onSubmit={this.handleSubmit} className='review-form'>
            <input type="textarea" 
              // value="How was your stay?"
              onChange={this.update('body')}
              className='review-form-body-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.cleanliness}
              onChange={this.update('cleanliness')}
              className='review-form-rating-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.communication}
              onChange={this.update('communication')}
              className='review-form-rating-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.check_in}
              onChange={this.update('check_in')}
              className='review-form-rating-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.accuracy}
              onChange={this.update('accuracy')}
              className='review-form-rating-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.location}
              onChange={this.update('location')}
              className='review-form-rating-input'
            />
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.value}
              onChange={this.update('value')}
              className='review-form-rating-input'
            />
            <input type="submit" value="Submit" className="review-form-submit"/>
          </form>
          <div className="review-form-errors">  {this.state.errors}</div>
        </div>
      )
    }
    else{
      return(
        <div className = "review-form-div">
          review form
          <form onSubmit={this.handleSubmit} className='review-form'>
            <input type="textarea"
              // value="How was your stay?"
              onChange={this.update('body')}
              className='review-form-body-input'
            />
            <label htmlFor="cleanliness">Cleanliness</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.cleanliness}
              onChange={this.update('cleanliness')}
              className='review-form-rating-input'
            />
            <label htmlFor="communication">Communication</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.communication}
              onChange={this.update('communication')}
              className='review-form-rating-input'
            />
            <label htmlFor="check-in">Check-In</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.check_in}
              onChange={this.update('check_in')}
              className='review-form-rating-input'
            />
            <label htmlFor="accuracy">Accuracy</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.accuracy}
              onChange={this.update('accuracy')}
              className='review-form-rating-input'
            />
            <label htmlFor="location">Location</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.location}
              onChange={this.update('location')}
              className='review-form-rating-input'
            />
            <label htmlFor="value">Value</label>
            <input type="range"
              name="range"
              max='6'
              min='0'
              value={this.state.value}
              onChange={this.update('value')}
              className='review-form-rating-input'
            />
            <input type="submit" value="Submit" className="review-form-submit" />
          </form>
        </div>
      )}
  }
}

export default withRouter(ReviewForm)