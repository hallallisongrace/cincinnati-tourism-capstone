import './App.css';
import './Contact';
import './about.css';
import About from './About';
import React from 'react';
import Viewattra from './Viewattra';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';







class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      <Header/>
      <Route path='/about' component={About} />
      <Route path='/home' component={Home} />
       

        {/* <Footer /> */}
        </Router>
    </div>
   )
  };
}







export default App;
