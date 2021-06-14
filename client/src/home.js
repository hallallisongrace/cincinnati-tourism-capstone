import React, { Component } from 'react';
// import React from 'React';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// IMPORTS BELOW ARE FOR WEATHER APP 
import Weather from './app_component/weather.component';
import "weather-icons/css/weather-icons.css";
// IMPORTS ABOVE ARE FOR WEATHER APP ^

// images below
import NewPort from './assets/NewPort.jpg'
// images above

const API_key = '61a77c269cf172ee908507307a3ccb9f';

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm :"wi-thunderstorm",
      Drizzle:'wi-sleet',
      Rain:'wi-storm-showers',
      Snow:'wi-snow',
      Atmosphere:'wi-fog',
      Clear:'wi-day-sunny',
      Clouds:'wi-day-fog'
    };
  }
  

  calCelsius(temp){
    let cell = Math.floor(temp- 273.15);
    return cell;
  }

  get_WeatherIcon(icons,rangeId){

    switch(true){
      case rangeId >= 200 && rangeId <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
        case rangeId >= 300 && rangeId <= 321:
          this.setState({icon:this.weatherIcon.Drizzle});
          break;
          case rangeId >= 500 && rangeId <= 531:
          this.setState({icon:this.weatherIcon.Rain});
          break;
          case rangeId >= 600 && rangeId <= 622:
          this.setState({icon:this.weatherIcon.Snow});
          break;
          case rangeId >= 701 && rangeId <= 781:
            this.setState({icon:this.weatherIcon.Atmosphere});
            break;
            case rangeId === 800:
            this.setState({icon:this.weatherIcon.Clear});
            break;
            case rangeId >= 801 && rangeId <= 804:
              this.setState({icon:this.weatherIcon.Clouds});
              break;
              default:
                this.setState({icon:this.weatherIcon.Clouds});
    }
  }

  getWeather = async(e) =>{

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Cincinnati,US&appid=${API_key}`);
      const response = await api_call.json();

      console.log(response);
    
      this.setState({
        city:response.name,
        country:response.sys.country,
        temp_celsius:this.calCelsius(response.main.temp),
        temp_max:this.calCelsius(response.main.temp_max),
        temp_min:this.calCelsius(response.main.temp_min),
        description:response.weather[0].description,
      })

      this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);
  };
  

  
  render(){

    return(
    <div id="body" className="text-center">
      <section className="container-fluid position-relative" id="section">
        <h1 className="position-absolute top-50 translate-middle bg-light p-3" id="title">Welcome <br/>TO CINCY TRAVELS</h1>
      </section>
      <section>

        <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.temp_celsius} temp_min={this.state.temp_min} temp_max={this.state.temp_max} description={this.state.description} weatherIcon={this.state.icon} />      

      </section>
    {/* IMAGES BELOW */}
    <section className="container-fluid z-index-1 d-flex justify-content-end text-center mt-4">
      <div className="col-sm-8 p-5">
        <div className="card rounded-0 shadow-lg">
          <div className="card-body">
            <img src={NewPort} className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text" id="para">NewPort Aquarium</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid d-flex justify-content-start text-center mt-4">
      <div className="col-sm-8 p-5">
        <div className="card rounded-0 shadow-lg">
          <div className="card-body">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIfYH7e1-w6cahCMvPqgdBiec9sJMUBfd_0gby_-HhTVTTYsFW_SdB4k3wZllXrgUlGZwr6MzO7sKRsskeTnrbEQ" className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text" id="para">Cincinnati Zoo & Botanical Garden</p>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid d-flex justify-content-end text-center mt-4">
      <div className="col-sm-8 p-5">
        <div className="card rounded-0 shadow-lg">
          <div className="card-body">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKicqdGIHMk7fz3Y66TZwmhcKoBopxm0sogR9oqvwFVhJ4uA_e_EzBYQCudUCO1l-IJhqAEm_heP1FT-iNslvVg" className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text" id="para">Cincinnati Art Museum </p>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid d-flex justify-content-start text-center mt-4">
      <div className="col-sm-8 p-5">
        <div className="card rounded-0">
          <div className="card-body">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3AaPhTZ3pKz0Pys10h09j1cdr0EkIFTYdyGxVO3THMYZhqD0AtGPv7iG8BUw96qqCtsEtnCvdpoLp-9BSivkXGw" className="card-img border border-light rounded" />
            <p className="mt-4 p-3 card-text" id="para">Cincinnati Museum</p>
          </div>
        </div>
      </div>
    </section>
     <section className="container-fluid m-0 p-0 d-flex justify-content-center">
      <div className="ratio mt-5" id="video">
        <iframe src="https://www.youtube.com/embed/bEGihAPfL8o?playlist=bEGihAPfL8o&loop=1&autoplay=1&controls=0&showinfo=0&rel=0&mute=1" frameborder="0"></iframe>

      </div>
     
    </section>
    <section className="container-fluid text-light bg-dark p-5">
      <h1 id="heading">THANK YOU! <br />FOR CHOOSING CINCY TRAVELS</h1>
      <h6 style={{fontSize: 20,fontWeight:"bold", color: '#F9CC87 '}}> TRAVEL • EXPLORE • TOUR</h6>
      <p id="para">Wherever you are, here at CINCY TRAVELS we are dedicated to showing you the sites of the <b>Cincinnati</b> Area</p>
    </section>
   
    </div>

        
    );
  }
}

export default Home;