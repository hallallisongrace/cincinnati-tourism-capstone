//import './App.css';
import Contact from './Contact';
import About from './About';
import React from 'react';
import './server';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './navbar'; //Include Heder
// import Footer from './footer'; //Include Footer
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './Viewattra';
import Burger from './components/Burger/Burger';







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
        
      {/* </div> */}

        {/* <Footer /> */}
        </Router>
    </div>
   )
  };
}







export default App;
