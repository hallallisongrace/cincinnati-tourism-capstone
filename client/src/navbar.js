import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item active">
         <Link to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about'>About</Link>
        </li>
        <li class="nav-item">
        <Link to='/contact'>Contact</Link>
        </li>
        <li class="nav-item">
        <Link to='/add-attraction'>Add Attraction</Link>
        </li>
        <li class="nav-item">
         <Link to='/view-attractions'>View Attractions</Link>
        </li>
      </ul>
    </nav>
    )
  }
}



  


export default withRouter(Header);