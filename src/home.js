import React from 'react';// import css from '../'
import './home.css'
import coffeeShop from './assets/coffeeShop.jpg';
import trees from './assets/trees.jpg';
import woman from './assets/woman.jpg';
import ocean from './assets/ocean.jpg';
import paris from './assets/paris.jpg';
import beach from './assets/beach.jpg';
import church from './assets/church.jpg';


const home = () => {
    return (
     <div id='body'>
  <section className="container-fluid position-relative mb-5">
  <h1 className="position-absolute top-50 start-50 translate-middle text-light">WELCOME <br />TRAVEL WITH US</h1>
  </section>
  {/* IMAGES BELOW */}
  <section className="d-flex align-items-center d-flex justify-content-start">
    <div className="ms-5 col-sm-6">
      <img src={paris} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark rounded text-light p-4 col-sm-8 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  <section className="d-flex align-items-center d-flex justify-content-end">
    <div className="me-5 col-sm-6">
      <img src={woman} className="img-fluid shadow-lg border border-light rounded " />
      <p className="bg-dark text-light rounded p-4 float-right col-sm-4 m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  <section className="d-flex align-items-center">
    <div className="ms-5 col-sm-6">
      <img src={ocean} className="img-fluid shadow-lg border border-light rounded d-flex justify-content-start" />
      <p className="bg-dark text-light p-4 col-sm-6 mt-4 rounded d-flex justify-content-end ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
  <section className="d-flex align-items-center d-flex justify-content-end">
    <div className="me-5 col-sm-6">
      <img src={beach} className="img-fluid shadow-lg border border-light rounded" />
      <p className="bg-dark text-light p-4 col-sm-8 mt-3 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt tempore perspiciatis ab sunt cumque quis repudiandae labore? Aspernatur doloribus ab architecto perferendis iusto vero explicabo tempora rerum in suscipit.</p>
    </div>
  </section>
 
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </div>
  

        
    )
};

export default home;