import './App.css';
import './viewattra';
import './viewattra'
import './about.css'
import About from './About'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//    <About/>
//     </div>
//   );
// }

class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      <Header></Header>
      {/* <h1 className="mr-5 mt-5"></h1>
       <div className="container mb-5 mt-5">
        <h1 className="mr-5 mt-5"></h1> */}
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      {/* </div> */}

        <Footer />
        </Router>
    </div>
   )
  };
}







export default App;
