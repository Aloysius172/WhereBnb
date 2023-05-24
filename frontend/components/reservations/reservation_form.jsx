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
    let newDate = new Date()
 
    let nextDate = this.state.reservation_start === '' ?  newDate : new Date(this.state.reservation_start)
    nextDate.setDate(nextDate.getDate() + 1)
    
    return(
       <div className='reservation-form-div'>
        <form onSubmit={this.handleSubmit} className='reservation-form'>
          <div className='date-input-container'>
            <div className='check-in-div'>
              <label htmlFor="check-in">Check In</label>
              <input type="date"
                value={this.state.reservation_start}
                min={newDate.toISOString().split('T')[0]}
                onChange={this.update('reservation_start')}
                className='reservation-form-startdate-input'
              />
            </div>
            <div className='check-out-div'>
              <label htmlFor="check-out">Check Out</label>
              <input type="date"
                value={this.state.reservation_end}
                min={nextDate.toISOString().split('T')[0]}
                onChange={this.update('reservation_end')}
                className='reservation-form-enddate-input'
              />
            </div>
            
          </div>
          
          <input type="submit" value="Check Availabilty"  className='reservation-form-submit'/>
        </form>
       </div>
    )

    
  }
}

export default withRouter(ReservationForm)