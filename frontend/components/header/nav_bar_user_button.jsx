import React from "react";
import Dropdown from "./dropdown";
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt'

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
          <FaUserAlt className="user-icon"/> <Dropdown allprops={this.props.allprops}/>
        </div>
      )
    } else{
      return(
        <div className="user-icon-div" onClick={this.handleClickClose}>
          <FaUserAlt className="user-icon"/>
        </div>
      )
    }
  }
}

export default Button