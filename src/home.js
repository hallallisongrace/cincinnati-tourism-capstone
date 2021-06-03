import React from 'react';

export const home = () => {
    return (
        <div>
        {/* NAVBAR */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        {/* NAVBAR */}
     <section class="container w-100" style="background-color: indigo;">
      <img src="./assets/minimal image.jpg" class="img-fluid"/>
     </section>
     <section class="container-fluid position-relative mb-5" style="background-image:url('./assets/triangle.jpg');background-size:cover;">
        <h1 class="position-absolute top-50 start-50 translate-middle text-light">WELCOME <br />TRAVEL WITH US</h1>
    </section>

    {/* <!-- IMAGES BELOW --> */}
    <section class="d-flex align-items-center d-flex justify-content-start">
            <div class="ms-5 col-sm-6">
                <img src="./assets/paris.jpg" class="img-fluid shadow-lg border border-light rounded"/>
                <p class="bg-dark rounded text-light p-4 col-sm-8 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
            </div>
    </section>
    <section class="d-flex align-items-center d-flex justify-content-end">
        <div class="me-5 col-sm-6">
            <img src="./assets/woman.jpg" class="img-fluid shadow-lg border border-light rounded "/>
            <p class="bg-dark text-light rounded p-4 float-right col-sm-4 m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
        </div>
    </section>
    <section class="d-flex align-items-center">
        <div class="ms-5 col-sm-6">
            <img src="./assets/ocean.jpg" class="img-fluid shadow-lg border border-light rounded d-flex justify-content-start"/>
            <p class="bg-dark text-light p-4 col-sm-6 mt-4 rounded d-flex justify-content-end ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
        </div>
    </section>
    <section class="d-flex align-items-center d-flex justify-content-end">
        <div class="me-5 col-sm-6">
            <img src="./assets/beach.jpg" class="img-fluid shadow-lg border border-light rounded"/>
            <p class="bg-dark text-light p-4 col-sm-8 mt-3 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
        </div>
    </section>
   
        </div>
        
    )
};

export default home;