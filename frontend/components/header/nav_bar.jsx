import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown'
import Button from './nav_bar_user_button';
import SearchBar from './search_bar';


const NavBar = props => {

  return (
    <header className='nav-bar'>
      <div>
        <Link to='/' className='nav-link'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path fill="#6c19ff" d="M45,22.62c-2.74,9.21-7.27,6.73-7.96,6.07c0,0,1.93-3.03,1.93-6.3c0-3.27-1.55-6.68-3.96-9.13	c-2.4-2.45-5.35-4.36-3.41-6.41c1.58-1.65,4.63-1.18,8.96,3.97C45,16.08,45,21.4,45,22.62z"/><path fill="#a64aff" d="M45,22.62c0,7.06-4.06,14.08-8.44,14.08c-3.21,0-5.53-1.69-7.13-5.49c0.14-0.63,0.28-1.29,0.54-2.09	c0.08-0.25,0.17-0.51,0.27-0.79c0.08-0.22,0.17-0.45,0.27-0.68c0.05-0.12,0.11-0.24,0.16-0.37c0.12-0.25,0.24-0.51,0.37-0.78	c0.14-0.28,0.27-0.54,0.41-0.79c0.14-0.24,0.28-0.47,0.42-0.68c0.05-0.07,0.09-0.14,0.14-0.2c0.09-0.13,0.19-0.25,0.29-0.36	c0.15-0.16,0.3-0.29,0.45-0.39c0.05-0.04,0.11-0.07,0.16-0.09c0.21-0.11,0.42-0.15,0.64-0.1c0.12,0.02,0.24,0.06,0.36,0.13	c0.06,0.03,0.11,0.07,0.17,0.12c0.06,0.05,0.13,0.1,0.19,0.16s0.12,0.13,0.18,0.2s0.12,0.15,0.18,0.24	c0.07,0.08,0.13,0.17,0.19,0.27v0.01c0.55,1.26,1.06,2.54,2.22,3.67C37.73,29.35,42.26,31.83,45,22.62z"/><path fill="#f5bc00" d="M15.67,31.97c0.09,0.33,0.19,0.65,0.31,0.96c-0.05,0.03-0.09,0.05-0.14,0.07	C13,34.19,7.85,35.13,3.83,30.42c0,0-0.207-0.654-0.27-0.89c-0.06-0.23-0.12-0.46-0.17-0.7c-0.05-0.21-0.09-0.42-0.13-0.64	c-0.06-0.31-0.11-0.63-0.15-0.94C3.1,27.12,3.08,27,3.07,26.87c-0.01-0.11-0.02-0.21-0.02-0.33c-0.02-0.14-0.03-0.29-0.03-0.44	C3.01,25.86,3,25.62,3,25.38C3,14.76,9.65,6,14.1,6.05c1.25,0.02,2.25,0.83,2.78,2.18c0.66,1.7,0.23,6.55-1.25,12.31l-0.18,0.78	c-0.78,3.77-0.31,7.54,0.22,10.63C15.67,31.96,15.67,31.96,15.67,31.97z"/><path fill="#eb7900" d="M26.22,37.71c-0.02,0.035-0.068,0.108-0.087,0.132c-0.17,0.216-0.333,0.431-0.513,0.638	c-0.26,0.3-0.53,0.59-0.81,0.87c-0.39,0.38-0.81,0.74-1.25,1.06c-0.74,0.54-1.54,0.97-2.42,1.24c-0.17,0.06-0.35,0.11-0.53,0.15	c-0.54,0.13-1.11,0.2-1.7,0.2c-0.23,0-0.46-0.01-0.69-0.02c-0.15-0.01-0.29-0.02-0.44-0.04c-0.13-0.01-0.25-0.02-0.38-0.04	c-0.12-0.01-0.23-0.03-0.35-0.05c-0.14-0.02-0.27-0.04-0.41-0.07c-0.19-0.03-0.38-0.07-0.57-0.12c-0.15-0.03-0.3-0.07-0.45-0.11	c-0.08-0.02-0.17-0.05-0.26-0.07c-0.17-0.05-0.34-0.1-0.51-0.16c-0.73-0.24-1.47-0.54-2.18-0.9c-0.18-0.08-0.35-0.17-0.52-0.27	c-0.12-0.06-0.24-0.13-0.35-0.19c-0.14-0.08-0.29-0.17-0.43-0.26c-0.51-0.31-1.01-0.65-1.49-1.02c-0.22-0.16-0.43-0.33-0.64-0.51	c-0.09-0.06-0.17-0.14-0.25-0.21c-0.05-0.04-0.1-0.08-0.14-0.13c-0.22-0.18-0.43-0.38-0.64-0.58c-0.28-0.27-0.82-0.84-0.82-0.85	c-0.149-0.162-0.299-0.329-0.443-0.5c-0.078-0.092-0.367-0.46-0.387-0.485c-0.116-0.147-0.374-0.495-0.559-0.756	c-0.099-0.139-0.339-0.5-0.405-0.601C5.511,33.928,5.26,33.52,5.22,33.45c-0.17-0.3-0.34-0.61-0.5-0.93	c-0.29-0.63-0.87-2.05-0.89-2.1c4.002,4.689,9.124,3.778,11.972,2.596c0.013-0.005,0.178-0.086,0.178-0.086s0.015,0.044,0.017,0.05	C18.64,40.548,23.962,39.598,26.22,37.71z"/><path fill="#eb0000" d="M34.82,25.01c-0.06-0.1-0.12-0.19-0.19-0.27c-0.06-0.09-0.12-0.17-0.18-0.24s-0.12-0.14-0.18-0.2	s-0.12-0.12-0.19-0.16c-0.06-0.05-0.11-0.09-0.17-0.12c-0.12-0.07-0.24-0.11-0.36-0.13c-0.22-0.05-0.43-0.01-0.64,0.1	c-0.05,0.02-0.11,0.05-0.16,0.09c-0.15,0.1-0.3,0.23-0.45,0.39c-0.1,0.11-0.2,0.23-0.29,0.36c-0.05,0.06-0.09,0.13-0.14,0.2	c-0.15,0.21-0.29,0.44-0.42,0.68c-0.14,0.25-0.27,0.51-0.41,0.79c-0.14,0.27-0.26,0.53-0.37,0.78c-0.05,0.13-0.11,0.25-0.16,0.37	c-0.1,0.23-0.19,0.46-0.27,0.68c-0.11,0.28-0.2,0.54-0.27,0.79c-0.26,0.8-0.4,1.46-0.54,2.09c-0.317,1.337-1.369,4.056-3.146,6.419	c-0.018,0.024-0.063,0.081-0.063,0.081c-2.26,1.89-7.59,2.84-10.23-4.75c0-0.01-0.01-0.02-0.01-0.03c2.87-1.34,7.96-8.71,10.9-10.71	c2.4-1.63,5.05-1.63,6.47,0.17C33.82,22.98,34.23,23.54,34.82,25.01z"/></svg></Link>
      </div>
      <div>
        <SearchBar allprops = {props}/>
      </div>
      <div>
        <Button allprops={props}/>
      </div>
     
    </header>
      
  );
};

export default NavBar;
