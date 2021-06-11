import React, { Component } from 'react';
// import React from 'React';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// IMPORTS BELOW ARE FOR WEATHER APP 
// import Weather from './app_component/weather.component'
import 'weather-icons/css/weather-icons.css';
// IMPORTS ABOVE ARE FOR WEATHER APP ^
// for weather app
// images below
import cityHall from './assets/cityHall.jpg';
import bridge from './assets/bridge.jpg';
import Museum from './assets/Museum.jpg';
import Night from './assets/Night.jpg';
// images above

// const API_key = '61a77c269cf172ee908507307a3ccb9f';

class Home extends React.Component{

  // constructor(){
  //   super();
  //   this.state = {
  //     city:undefined,
  //     country:undefined,
  //     icon:undefined,
  //     main:undefined,
  //     celsius:undefined,
  //     temp_max:undefined,
  //     temp_min:undefined,
  //     description:"",
  //     error:false
  //   };

  //   this.weatherIcon={
  //     Thunderstorm :"wi-thunderstorm",
  //     Drizzle:'wi-sleet',
  //     Rain:'wi-storm-showers',
  //     Snow:'wi-snow',
  //     Atmosphere:'wi-fog',
  //     Clear:'wi-day-sunny',
  //     Clouds:'wi-day-fog'
  //   }
  // }

  // calCelsius(temp){
  //   let cell = Math.floor(temp- 273.15);
  //   return cell;
  // }

  // get_WeatherIcon(icon,rangeId){

  //   switch(true){
  //     case rangeId >= 200 && rangeId <=232:
  //       this.setState({icon:this.weatherIcon.Thunderstorm});
  //       break;
  //       case rangeId >= 300 && rangeId <= 321:
  //         this.setState({icon:this.weatherIcon.Drizzle});
  //         break;
  //         case rangeId >= 500 && rangeId <= 531:
  //         this.setState({icon:this.weatherIcon.Rain});
  //         break;
  //         case rangeId >= 600 && rangeId <= 622:
  //         this.setState({icon:this.weatherIcon.Snow});
  //         break;
  //         case rangeId >= 701 && rangeId <= 781:
  //           this.setState({icon:this.weatherIcon.Atmosphere});
  //           break;
  //           case rangeId === 800:
  //           this.setState({icon:this.weatherIcon.Clear});
  //           break;
  //           case rangeId >= 801 && rangeId <= 804:
  //             this.setState({icon:this.weatherIcon.Clouds});
  //             break;
  //             default:
  //               this.setState({icon:this.weatherIcon.Clouds});
  //   }
  // }

  // getWeather = async(e) =>{

  //   e.preventDefault();

  //   const city= e.target.elements.city.value;
  //   const country = e.target.elements.country.value;

  //  if(city && country)
  //     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.cincinnati},${country.us}&appid=${API_key}`);
  //     const response = await api_call.json();
  //     console.log(response);

  //     this.setState({
  //       city:`${response.name.cincinnati},${response.sys.country.us}`,
  //       temp_celsius:this.calCelsius(response.main.temp),
  //       temp_max:this.calCelsius(response.main.temp_max),
  //       temp_min:this.calCelsius(response.main.temp_min),
  //       description:response.weather[0].description,
  //     })

  //     this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);
  //  }else{
  //   this.setState({error:true});
  //  }
  // };

  
  render(){

    return(
  <div id="body" className="text-center">
    <section className="container-fluid position-relative" id="section">
      <h1 className="position-absolute top-50 start-50 translate-middle text-light">WELCOME <br/>TO CINCY TRAVELS</h1>
    </section>
    <section className="container-fluid text-light mt-5 p-5">
      <h1 className="">THANK YOU! <br/>FOR CHOOSING CINCY TRAVELS</h1>
      <h6> TRAVEL • EXPLORE • TOUR</h6>
      <p>Wherever you are, here at CINCY TRAVELS we are dedicated to showing you the sites of the <b>Cincinnati</b> Area</p>
    </section>
    <section className="container-fluid text-light mt-5">
      <h1 className="bg-white text-dark">POPULAR SITES</h1>
      <h6>in the <b>Cincinnati Area</b></h6>
    </section>
  {/* IMAGES BELOW */}
    <section className="container-fluid z-index-1 d-flex justify-content-end text-center mt-4">
      <div className="col-sm-8 p-5 shadow-lg">
        <div className="card rounded-0">
          <div className="card-body">
            <img src={cityHall} className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text">City Hall </p>
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid d-flex justify-content-start text-center mt-4">
      <div className="col-sm-8 p-5 shadow-lg">
        <div className="card rounded-0">
          <div className="card-body">
            <img src={Museum} className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text">City Hall </p>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid d-flex justify-content-end text-center mt-4">
      <div className="col-sm-8 p-5 shadow-lg">
        <div className="card rounded-0">
          <div className="card-body">
            <img src={bridge} className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text">City Hall </p>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid d-flex justify-content-start text-center mt-4">
      <div className="col-sm-8 p-5 shadow-lg">
        <div className="card rounded-0">
          <div className="card-body">
            <img src={Night} className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text">City Hall </p>
          </div>
        </div>
      </div>
    </section>
     {/* <section className="container d-flex justify-content-center">
      <div className="ratio ratio-21x9 m-5">
        <iframe className="shadow-lg rounded" src="https://www.youtube.com/embed/pKwuW06NvXM" allowFullScreen id="video"></iframe>
      </div>
    </section> */}
  {/* <section> */}
      {/* <Form loadweather={this.getWeather} error={this.state.error}/> */}
      {/* <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.temp_celsius} temp_min={this.state.temp_min} temp_max={this.state.temp_max} description={this.state.cincinnati.description} weatherIcon={this.state.icon} /> */}
  {/* </section> */}
  
  
 
  
  </div>
  

        
    );
  }
}

export default Home;