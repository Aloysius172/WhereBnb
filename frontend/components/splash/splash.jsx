import React from "react";
import ListingsIndex from "../listings/listings_index";

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="splash-div">
        <ListingsIndex/>
      </div>
    )
  }
}

export default Splash