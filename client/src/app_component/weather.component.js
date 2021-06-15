import React from 'react';
import './weather.css';


const Weather = (props) =>{
    return(
       <div className="container" id="container">
        <div className="cards pt-4">
        <h1 style={{fontWeight: 'bold', fontFamily: '"Cormorant SC", serif'}}>
                {props.city} , {props.country}</h1>
           <h5 className="py-4">
               <i className={`wi ${props.weatherIcon} display-1`}/>
           </h5>
           {props.temp_celsius ?(
            <h1 className="py-2">{props.temp_celsius}<span className="blink_me">&deg;</span> C </h1>
           ):null}
            {/* <br/> */}
           {props.Fahrenheit ?(
            <h3 className="py-2">{props.Fahrenheit}<span className="blink_me">&deg;</span> F </h3>
           ):null}
            {/* {show max and min temp} */}
            <h5 style={{fontWeight:'900'}}>Temperature ranges</h5>
            {minmaxTemp(props.temp_min, props.temp_max)}
            <h4 className="py-4" style={{fontWeight: 'bold', fontFamily: '"Cormorant SC", serif'}}>{props.description}</h4>
        </div>
       </div>
    );
}

const minmaxTemp = (min, max) =>{
    if(min && max){
        return(
            <h3>
            <span className="px-4">{min}<span className="blink_me">&deg;</span></span>
            <span className="px-4">{max}<span className="blink_me">&deg;</span></span>
        </h3>
        );
    }
}
export default Weather;