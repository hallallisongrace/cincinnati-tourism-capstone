import React from 'react';
import './App.css';
import Contact from './contact.js';
import About from './About.js';
import './server';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'; //Include Footer
import Home from './home';
import Viewattra from './Viewattra';
import Burger from './components/Burger/Burger';
import AddTodo from './addAttract';



class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      {/* <Header/> */}
      <Burger/>
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/Contact' component ={Contact} />
        <Route path='/attractions' component ={Viewattra} />
        <Route path='addattractions' component={AddTodo} />
        
      {/* </div> */}

      <Footer/>

        </Router>

    </div>
   )
  };
}







export default App;
