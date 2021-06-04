import React from 'react';
import './App.css';
import Contact from './contact.js';
import About from './About.js';
import './server';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer
import Home from './home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './viewattra';







class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      <Header/>
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component ={Contact} />

        <Route path='/attractions' component ={Viewattra} />
        
      {/* </div> */}

        <Footer />
        </Router>
    </div>
   )
  };
}







export default App;
