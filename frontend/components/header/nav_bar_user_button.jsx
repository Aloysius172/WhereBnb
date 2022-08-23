import React from "react";
import Dropdown from "./dropdown";
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt'
import { FaBars } from '@react-icons/all-files/fa/FaBars'

class Button extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClickClose = this.handleClickClose.bind(this)
  }


  handleClickOpen(e){
    // debugger
    e.preventDefault();
      this.setState({
        clicked: false
      })
  }


  handleClickClose(e){
    // debugger
    e.preventDefault();
      this.setState({
        clicked: true
      })

  }

  render(){
    // debugger
    if(this.state.clicked){
      return(
        <div className="user-icon-div" onClick={this.handleClickOpen}>
          <div className="user-icon" ><FaBars/><FaUserAlt/> </div> 
          <Dropdown allprops={this.props.allprops}/>
        </div>
      )
    } else{
      return(
        <div className="user-icon-div" onClick={this.handleClickClose}>
          <div className="user-icon"><FaBars /><FaUserAlt/></div>
        </div>
      )
    }
  }
}

export default Button