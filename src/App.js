import './App.css';
import './about.css'
import About from './About'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer

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
      <Header></Header>
      {/* <h1 className="mr-5 mt-5"></h1>
       <div className="container mb-5 mt-5">
        <h1 className="mr-5 mt-5"></h1> */}
        <About></About>
      {/* </div> */}

        <Footer></Footer>
    </div>
   )
  };
}







export default App;
