import React from 'react'
import { withRouter } from 'react-router-dom'
// import { IoIosArrowUp } from '@react-icons/all-files/Io/IoIosArrowUp'
// import { IoIosArrowDown } from '@react-icons/all-files/Io/IoIosArrowDown'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/Io'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { BiMinus } from '@react-icons/all-files/bi/BiMinus'

class ReservationForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reservation_start: '',
      reservation_end: '',
      guests: 1,
      clicked: false
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.toggleState = this.toggleState(this);
    this.getNumGuests = this.getNumGuests.bind(this);

  }

  componentDidMount() {
    this.toggleState = this.toggleState.bind(this);
    // this.getNumGuests = this.getNumGuests.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const reservation = {
      listing_id: this.props.listing.id,
      reserver_id: this.props.reserver_id,
      reservation_start: this.state.reservation_start,
      reservation_end: this.state.reservation_end,
      guests: this.state.guests
    };
    
    this.props.createReservation(reservation)
    
  
  }

  getDaysStayed() {
    if (this.state.reservation_start && this.state.reservation_end) {
      const daysStayed = parseInt(this.state.reservation_end.split('-')[2]) - parseInt(this.state.reservation_start.split('-')[2])
      return daysStayed
    }
  }

 getPrice(category) {
  if(category === 'perNight'){
    return this.props.listing.price * this.getDaysStayed()
  }else if(category === 'cleaning'){
    if (this.getPrice('perNight') >= 2500){
      return 450
    }else{return 250}
  }else if(category === 'service'){
    return (this.props.listing.price * this.getDaysStayed() / 7).toFixed(0)
  }
 }

//  getNumGuests(operation) {
//     while (this.state.guests < this.props.listing.guests && this.state.guests > 0){
//       if(operation === 'add'){
//         this.setState({ guests: this.state.guests + 1 }) 
//       }else{
//         if(operation === 'subtract'){
//           this.setState({ guests: this.state.guests - 1 }) 
//       }}
//     }
//  }

  getNumGuests(operation) {
    const { guests } = this.state;
    const { listing } = this.props;

    if (operation === 'add' && guests < listing.guests) {
      this.setState({ guests: guests + 1 });
    } else if (operation === 'subtract' && guests > 1) {
      this.setState({ guests: guests - 1 });
    }
  }


 toggleState() {
  this.setState({clicked: !this.state.clicked})
 }

 

  


  render(){
    let newDate = new Date()
 
    let nextDate = this.state.reservation_start === '' ?  newDate : new Date(this.state.reservation_start)
    nextDate.setDate(nextDate.getDate() + 1)

    // let daysStayed = parseInt(this.state.reservation_end.split('-')[2]) - parseInt(this.state.reservation_start.split('-')[2])
      
    // console.log(daysStayed)
   
    
    
    return(
       <div className='reservation-form-div'>
        <div className='reservation_form_price_night'>
          ${this.props.listing.price} night
        </div>
        <form onSubmit={this.handleSubmit} className='reservation-form'>
          <div className='date-input-container'>
            <div className='check-in-div'>
              <label htmlFor="check-in">CHECK-IN</label>
              <input type="date"
                value={this.state.reservation_start}
                min={newDate.toISOString().split('T')[0]}
                onChange={this.update('reservation_start')}
                className='reservation-form-startdate-input'
              />
            </div>
            <div className='check-out-div'>
              <label htmlFor="check-out">CHECKOUT</label>
              <input type="date"
                value={this.state.reservation_end}
                min={nextDate.toISOString().split('T')[0]}
                onChange={this.update('reservation_end')}
                className='reservation-form-enddate-input'
              />
            </div>
          </div>

          <div className='guests-input-container' onClick={this.toggleState}>
              <div className='guest-input'>
                <label htmlFor="guests">GUESTS</label>
                <div>{this.state.guests} {this.state.guests === 1 ? 'guest' : 'guests'}</div>
              </div>
              <div className='dropdown-icon'>
                {this.state.clicked ? <IoIosArrowUp /> : <IoIosArrowDown /> }
              </div>
          </div>

          { this.state.clicked && <div id='add-subtract-guest-dropdown-content'>
            
            <div className='add-subtract-guest-dropdown-div'>
              <h2 className='add-subtract-guest-dropdown-label'>Guests</h2>
              <div className='add-subtract-guest-dropdown-guest-adjust'>
                <BiMinus className='subtract-guests-button' onClick={() => this.getNumGuests('subtract')} />
              <span className='add-subtract-guests-counter'>{this.state.guests}</span>
              <BiPlus className='add-guests-button' onClick={() => this.getNumGuests('add')} />
              </div>
              
            </div>
            

          </div> } 
            
          
          <input type="submit" value={this.state.reservation_start && this.state.reservation_end ? 'Reserve' : 'Check availability'}  className='reservation-form-submit'/>
        </form>
        <div className='reservation_form_pricing_breakdown'>
          <div className='reservation_form_pernight_pricing'>
            <div> ${this.props.listing.price} x {this.getDaysStayed()} nights </div> <div> ${this.getPrice('perNight')} </div> 
          </div>
          <div className='reservation_form_cleaningfee_pricing'>
            <div> Cleaning fee </div> <div> ${this.getPrice('cleaning')} </div>
          </div>
          <div className='reservation_form_servicefee_pricing'>
            <div> Wherebnb service fee </div> <div> ${this.getPrice('service')} </div>
          </div>
          
        </div>
       </div>
    )

    
  }
}

export default withRouter(ReservationForm)