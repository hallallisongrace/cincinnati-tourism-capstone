import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import github from './assets/assets/githubicon.png';
import linkedin from './assets/assets/linkedinicon.png';






class Footer extends React.Component
{
  render()
  {
    return (
      




                
 <footer className="footer-column">               

     <h1>Cincy Travels</h1>
    <div className="footer-row">
     <div ClassName="footeroptions" id="footer-left">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Add Attractions</p>
        <p>View Attractions</p>


      
    
          <h3 id="kable-title">Kable Academy Capstone Project</h3>
        </div>
        

    <div className="footer-right">
    <h3 id="dom-title">Domynique Shelby</h3>
    <a href="https://github.com/dshelby24" ><img src={github}/></a> 
    <a href="https://www.linkedin.com/in/domynique-v-shelby/" ><img src={linkedin}/></a> 
    

    
 <h3 id="phil-title">Philicia Watson</h3>
 <a href="https://github.com/PhiliciaWatson" ><img src={github}/></a> 
 <a href="https://www.linkedin.com/in/philicia-watson-b26bba1b1/" ><img src={linkedin}/></a> 
           

    
    <h3 id="all-title">Allison Hall</h3>
    <a href="https://github.com/hallallisongrace" ><img src={github}/></a> 
    <a href="https://linkedin.com/in/hallallisongrace" ><img src={linkedin}/></a> 
     </div>
    </div>
    </footer>


    )
  }
}
export default Footer;


