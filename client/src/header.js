import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component{
  render()
  {
    return (
     
      <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="./home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Add Attractions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./attractions">View Attractions</a>
        </li>
      </ul>
    </nav>
    )
  }
}



  


export default Header;