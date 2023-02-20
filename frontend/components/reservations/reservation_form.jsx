import React from 'react'
import { withRouter } from 'react-router-dom'

class ReservationForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reservation_start: '',
      reservation_end: ''
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const reservation = {
      listing_id: this.props.listing_id,
      reserver_id: this.props.reserver_id,
      reservation_start: this.state.reservation_start,
      reservation_end: this.state.reservation_end
    };
    
    this.props.createReservation(reservation)
  
  }


  render(){
    debugger
    return(
       <div>
        <form onSubmit={this.handleSubmit}>
          <input type="date"
            value={this.state.reservation_start}
            onChange={this.update('reservation_start')}
          />
          <input type="date"
            value={this.state.reservation_end}
            onChange={this.update('reservation_end')}
          />
          <input type="submit" value="Reserve" />
        </form>
       </div>
    )

    
  }
}

export default withRouter(ReservationForm)