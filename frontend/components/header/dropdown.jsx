import Modal from '../modal/modal'
import React from 'react';

class Dropdown extends React.Component{
  constructor(props){
    super(props)
    this.openTheModal = this.openTheModal.bind(this)
    this.showDropdown = this.showDropdown.bind(this)
    this.onlineMenu =this.onlineMenu.bind(this)
    this.offlineMenu = this.offlineMenu.bind(this)
  }
  openTheModal(formType){
    return e => {
      e.preventDefault();
      this.props.allprops.openModal(formType)
    };
  };

  showDropdown(e){
    e.stopPropagation();
    document.getElementById("dropdown-content").classList.toggle("show")
  };

  onlineMenu(){
   return(
     <div id="dropdown-content" className="dropdown-content">
      <div className="dropdown-choice" onClick={this.props.allprops.logout}>
          Logout
      </div>
    </div>)

  }
  offlineMenu(){
    return(
      <div id="dropdown-content" className="dropdown-content">
        <div className="dropdown-choice" onClick={this.openTheModal('signup')}>
          Sign Up
        </div>
        <div className="dropdown-choice" onClick={this.openTheModal('login')}>
          Login
        </div>
      </div>   
    )
  }
  render(){

    return (
  
        <div className="dropdown-menu" onClick={this.showDropdown}>
          <Modal/>
          {
            this.props.allprops.currentUser ? this.onlineMenu() : this.offlineMenu()
          }
        </div>
      
    )
  }

}
export default Dropdown

