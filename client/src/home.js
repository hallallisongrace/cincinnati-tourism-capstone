import React, { Component } from 'react';
// import React from 'React';
import './home.css';
//import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// images below
import cityHall from './assets/cityHall.jpg';
import bridge from './assets/bridge.jpg';
import Museum from './assets/Museum.jpg';
import Night from './assets/Night.jpg';
// images above

class Home extends React.Component{

  render(){

    return(
      <div id="body">
      <section className="container-fluid position-relative" id="section">
      <h1 className="position-absolute top-50 start-50 translate-middle text-light">WELCOME <br />COME TRAVEL WITH US</h1>
    </section>
    <section className="container d-flex justify-content-center">
      <div className="ratio ratio-21x9 m-5">
        <iframe className="shadow-lg rounded" src="https://www.youtube.com/embed/pKwuW06NvXM" allowFullScreen id="video"></iframe>
      </div>
    </section>
  {/* IMAGES BELOW */}
  <section className="container-fluid align-items-center d-flex justify-content-start">
    <div className="ms-5 col-sm-6">
      <img src={Night} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark rounded text-light p-4 col-sm-8 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div> 
  </section>
  <section className="container-fluid align-items-center d-flex justify-content-end">
    <div className="ms-5 col-sm-6">
      <img src={Museum} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark text-light p-4 col-sm-4 mt-4 rounded ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  <section className="container-fluid align-items-center d-flex justify-content-start">
    <div className="ms-5 col-sm-6 ">
      <img src={cityHall} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark text-light p-4 col-sm-6 mt-4 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  <section className="container-fluid align-items-center d-flex justify-content-end">
    <div className="ms-5 col-sm-6">
      <img src={bridge} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark text-light p-4 col-sm-8 mt-3 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  
  
 
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </div>
  

        
    );
  }
}

export default Home;