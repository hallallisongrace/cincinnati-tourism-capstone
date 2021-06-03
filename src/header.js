import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component
{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Add Attractions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Attractions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>
      
    )
  }
}
export default Header;