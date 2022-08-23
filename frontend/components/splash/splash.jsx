import React from "react";
import ListingsIndex from "../listings/listings_index";
import Footer from "./footer";

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="splash-div">
        <ListingsIndex/>
        <Footer/>
      </div>
    )
  }
}

export default Splash