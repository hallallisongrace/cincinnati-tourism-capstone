//import './App.css';
import React, { Component } from 'react';
import Contact from './contact';
import About from './About';
import './App.css';
// IMPORTS BELOW ARE FOR WEATHER APP 
import Weather from './app_component/weather.component'
import Form from './app_component/form.component.js';
//import 'weather-icons/css/weather-icons.css';
// IMPORTS ABOVE ARE FOR WEATHER APP ^
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'; //Include Footer
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './footer'; //Include Footer
import Home from './home';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './Viewattra';
import addAttract from './addAttract';
import Burger from './components/Burger/Burger';
import SingleAttraction  from './singleatt';
import afteradd from './afteradd';



// for weather app
const API_key = '61a77c269cf172ee908507307a3ccb9f';

class App extends React.Component {
  
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

    this.weatherIcon={
      Thunderstorm :"wi-thunderstorm",
      Drizzle:'wi-sleet',
      Rain:'wi-storm-showers',
      Snow:'wi-snow',
      Atmosphere:'wi-fog',
      Clear:'wi-day-sunny',
      Clouds:'wi-day-fog'
    }
  }

  calCelsius(temp){
    let cell = Math.floor(temp- 273.15);
    return cell;
  }

  get_WeatherIcon(icon,rangeId){

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

    e.preventDefault();

    const city= e.target.elements.city.value;
    const country = e.target.elements.country.value;

   if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
      const response = await api_call.json();
      console.log(response);

      this.setState({
        city:`${response.name},${response.sys.country}`,
        temp_celsius:this.calCelsius(response.main.temp),
        temp_max:this.calCelsius(response.main.temp_max),
        temp_min:this.calCelsius(response.main.temp_min),
        description:response.weather[0].description,
      })

      this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);
   }else{
    this.setState({error:true});
   }
  };

  
  render() {
    return (
     <Router>
      <div className="maincontainer">
        { <Burger/> }
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/Contact' component ={Contact}/>
        <Route exact path='/attractions' component ={Viewattra}/>        
        <Route exact path ='/add' component= {addAttract}/>
        <Route exact path = '/attractions/:id' component={SingleAttraction}/>
        <Route exact path = '/after' component={afteradd}/>




        
      {/* </div> */}

          <Route path='/weather' render={() =>
            <div>
              <Form loadweather={this.getWeather} error={this.state.error}/>
              <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.temp_celsius} temp_min={this.state.temp_min} temp_max={this.state.temp_max} description={this.state.description} weatherIcon={this.state.icon} />
            </div>
          } />
        <Footer />
      </div>
    </Router>

   
   )}
}







export default App;
