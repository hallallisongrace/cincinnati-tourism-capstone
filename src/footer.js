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
          <a class="nav-link links" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Add Attractions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">View Attractions</a>
        </li>
      </ul>
    </nav>


    )
  }
}
export default Footer;


