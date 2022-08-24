import React from 'react'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    
  }

  render() {


    return (
      <div className='search-bar-div'>
        <input className='search-bar-input' type="text" placeholder='Where would you like to go?' /><FaSearch className='search-icon'/>
      </div>
    )
  }
}

export default SearchBar

