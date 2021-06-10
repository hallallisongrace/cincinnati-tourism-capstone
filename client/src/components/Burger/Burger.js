  import 'bootstrap/dist/css/bootstrap.min.css';
  import React from 'react';
  import "./burger.css"
  const Burger = () => {

    
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid bg-light">
        <a className="navbar-brand" href="#">Cincy Travels</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-center navbar-nav-scroll" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 bg-light">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Attractions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">View Attractions</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Seasons
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="#">Spring</a></li>
                <li><a className="dropdown-item" href="#">Summer</a></li>
                <li><a className="dropdown-item" href="#">Autumn</a></li>
                <li><a className="dropdown-item" href="#">Winter</a></li>
              </ul>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Destinations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Over the Rhine</a></li>
                <li><a className="dropdown-item" href="#">Smale Riverfront Park</a></li>
                <li><a className="dropdown-item" href="#">Downtown</a></li>
                <li><a className="dropdown-item" href="#">Covington/Northern Kentucky</a></li>
              </ul>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Experiences
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Culture</a></li>
                <li><a className="dropdown-item" href="#">Outdoors</a></li>
                <li><a className="dropdown-item" href="#">Food</a></li>
                <li><a className="dropdown-item" href="#">Luxury</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success bg-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  )
  }
  export default Burger
