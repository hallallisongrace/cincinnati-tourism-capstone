import './App.css';
import './about.css'
import About from './About'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer

function App() {
  return (
    <div className="App">
   <About/>
    </div>
  );
}

class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
      <h1 className="mr-5 mt-5"></h1>
       <div className="container mb-5 mt-5">
        <h1 className="mr-5 mt-5"></h1>
      </div>
        <Footer></Footer>
    </div>
   )
  };
}







export default App;
