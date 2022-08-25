import React from "react";
import ListingsIndexContainer from '../listings/listings_index_container'
import Footer from "./footer";
import FilterBar from '../fliter/filter_bar';

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="splash-div">
        <FilterBar/>
        <ListingsIndexContainer/>
        <Footer/>
      </div>
    )
  }
}

export default Splash