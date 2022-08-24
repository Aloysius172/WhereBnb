import React from "react";
import ListingsIndexContainer from '../listings/listings_index_container'
import Footer from "./footer";

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="splash-div">
        <ListingsIndexContainer/>
        <Footer/>
      </div>
    )
  }
}

export default Splash