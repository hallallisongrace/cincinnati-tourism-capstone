import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';






class Footer extends React.Component
{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-white">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link links" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Add Attractions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="/attractions">View Attractions</a>
        </li>
      </ul>
    </nav>


    )
  }
}
export default Footer;


