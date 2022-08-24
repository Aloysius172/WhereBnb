import React from 'react'
//island
import { GiIsland } from '@react-icons/all-files/gi/GiIsland'
//beach
import { FaUmbrellaBeach } from '@react-icons/all-files/fa/FaUmbrellaBeach'
//camping
import { GiCampingTent } from '@react-icons/all-files/gi/GiCampingTent'
//arctic
import { FaSnowman } from '@react-icons/all-files/fa/FaSnowman'
//pool
import { MdPool } from '@react-icons/all-files/md/MdPool'
//barn
import { GiBarn } from '@react-icons/all-files/gi/GiBarn'
//filter
import { BiSliderAlt } from '@react-icons/all-files/bi/BiSliderAlt'
//haunted
import { GiSpookyHouse } from '@react-icons/all-files/gi/GiSpookyHouse'
//lighthouse
import { GiLighthouse } from '@react-icons/all-files/gi/GiLighthouse'
//greenhouse
import { GiGreenhouse } from '@react-icons/all-files/gi/GiGreenhouse'

const FilterBar = props => {
 return(
  <div className="filter-bar-div">
    <button className='filter-bar-icon'>
       <FaSnowman className='snow-icon'/>
       <span className='filter-icon-text'>Arctic</span>
    </button>
    <button className='filter-bar-icon'>
      <GiBarn className='barn-icon'/>
      <span className='filter-icon-text'>Barn</span>
    </button>
    <button className='filter-bar-icon'>
      <FaUmbrellaBeach className='beach-icon'/>
       <span className='filter-icon-text'>Beach</span>
    </button>
    <button className='filter-bar-icon'>
      <GiCampingTent className='camping-icon'/>
       <span className='filter-icon-text'>Camping</span>
    </button>
    <button className='filter-bar-icon'>
      <GiIsland className='island-icon'/>
       <span className='filter-icon-text'>Island</span>
    </button>
    <button className='filter-bar-icon'>
      <GiGreenhouse className='greenhouse-icon' />
       <span className='filter-icon-text'>Greenhouse</span>
    </button>
    <button className='filter-bar-icon'>
      <GiSpookyHouse className='hauntedhouse-icon' />
       <span className='filter-icon-text'>Haunted</span>
    </button>
    <button className='filter-bar-icon'>
      <GiLighthouse className='lighthouse-icon'/>
       <span className='filter-icon-text'>Lighthouse</span>
    </button>
    <button className='filter-bar-icon'>
     <MdPool className='pool-icon' />
       <span className='filter-icon-text'>Pool</span>
    </button>

    <button className='filter-modal-button'>
       <BiSliderAlt className='filter-button-icon'/>
       <span className='filter-icon-text'>Filter</span>
    </button>


  </div>
 )
}

export default FilterBar