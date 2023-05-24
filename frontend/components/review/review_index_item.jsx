import React from "react";

export default class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="review-index-item-div">
        <div>
          {this.props.review.reviewer.username}
        </div>
        <div>
          {this.props.review.body}
        </div>
        <div>
          {this.props.review.rating}
        </div>

      </div>
    )
  }
}