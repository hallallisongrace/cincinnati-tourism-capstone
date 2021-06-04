import './App.css';
import Contact from './Contact';
import './about.css';
import './home.css';
import About from './About';
import React from 'react';
import './server';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './Viewattra';







class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      <Header/>
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component ={Contact} />
g
        <Route path='/attractions' component ={Viewattra} />
        
      {/* </div> */}

        <Footer />
        </Router>
    </div>
   )
  };
}







export default App;
