import React from 'react'

export default class ListingsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <button className='listings-index-item'>
        <div className='listing-image'>
          <img src="https://bc-oa.com/static/9ccdc4a2d0b4ff890279af3d33ad5138/59889/44monroe_ph_3800x1900.jpg" className='image' alt="" />
        </div>
        <div className='listing-title'>
          Brooklyn Heights Townhouse
        </div>
        <div className='listing-price'>
          $450 night
        </div>
        <div className='listing-rating'>
          5.0
        </div>
        
      </button>
    )
  }
}
