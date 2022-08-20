import React from 'react'
import { RiSearchFill } from '@react-icons/all-files/ri/RiSearchFill'


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    
  }

  render() {


    return (
      <div className='search-bar-div'>
        <input className='search-bar-input' type="text" /><RiSearchFill/>
      </div>
    )
  }
}

export default SearchBar

