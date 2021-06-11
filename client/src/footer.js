import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
// import github from './assets/assets/githubicon.png';
// import linkedin from './assets/assets/linkedinicon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";




class Footer extends React.Component
{
  render()
  {
    return (
<footer>               

    

<div className ="footer-area">


    <div className="footer-columns">
     <div ClassName="footeroptions" id="footer-left">
     <ul className="nav-item">
      <a className="nav-link active" aria-current="page" href="/home">Home</a>
      </ul>
        <ul className="nav-item">
              <a className="nav-link" href="/about">About</a>
        </ul>
        <ul className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
        </ul>
        <ul className="nav-item">
              <a className="nav-link" href="/add">Add Attractions</a>
        </ul>

      </div>
      <div className="dropdown-container">
 <ul className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Seasons
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <ul><a className="dropdown-item" href="https://cincinnatiusa.com/trip-ideas/spring">Spring</a></ul>
                <ul><a className="dropdown-item" href="https://cincinnatiusa.com/trip-ideas/summer">Summer</a></ul>
                <ul><a className="dropdown-item" href="https://cincinnatiusa.com/trip-ideas/fall">Autumn</a></ul>
                <ul><a className="dropdown-item" href="https://cincinnatiusa.com/trip-ideas/winter">Winter</a></ul>
              </ul>
              </ul>
              <ul className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Destinations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul><a className="dropdown-item" href="https://wandercincinnati.com/2019/12/01/over-the-rhine-cincinnati/">Over the Rhine</a></ul>
                <ul><a className="dropdown-item" href="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/">Smale Riverfront Park</a></ul>
                <ul><a className="dropdown-item" href="https://www.downtowncincinnati.com/">Downtown</a></ul>
                <ul><a className="dropdown-item" href="https://www.meetnky.com/">Covington/Northern Kentucky</a></ul>
              </ul>
              </ul>
              <ul className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Experiences
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul><a className="dropdown-item" href="https://www.citybeat.com/arts-culture">Culture</a></ul>
                <ul><a className="dropdown-item" href="https://www.tripadvisor.com/Attractions-g5503747-Activities-c61-The_Cincinnati_Region.html">Outdoors</a></ul>
                <ul><a className="dropdown-item" href="https://photos.citybeat.com/25-essential-foods-every-cincinnati-visitor-should-try/?slide=1&admin-ajaxwew">Food</a></ul>
                <ul><a className="dropdown-item" href="https://anniewearsit.com/cincinnati-official-travel-guide/">Luxury</a></ul>
              </ul>
            </ul>
            <ul className="nav-item">
              <a className="nav-link" href="/attractions">View Attractions</a>
         </ul>
    
          <h3 id="kable-title"></h3>
        </div>
        </div>
<div className="media-container" id="mediaIcons">
  <FontAwesomeIcon icon={faYoutube} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
</div>

    <div className="shelby-container" id="shelby-footer">
    
    <h3 id="dom-title">Domynique Shelby</h3>
    
    <div className="shelby-icons">
    <a href="https://github.com/dshelby24" ><FontAwesomeIcon icon={faGithub}/></a> 
    <a href="https://www.linkedin.com/in/domynique-v-shelby/" ><FontAwesomeIcon icon={faLinkedin}/></a> 
    </div>
    </div>
    

    <div className="watson-container">
    <div className="watson-title">
      <h3 id="phil-title">Philicia Watson</h3>
    </div>
    <div className="watson-icons">
        <a href="https://github.com/PhiliciaWatson" ><FontAwesomeIcon icon={faGithub}/></a> 
        <a href="https://www.linkedin.com/in/philicia-watson-b26bba1b1/" ><FontAwesomeIcon icon={faLinkedin}/></a> 
    </div>
    </div>

    <div className="hall-container">
    <div className="hall-title">
    <h3 id="all-title">Allison Hall</h3>
    </div>
    <div className="hall-icons">
    <a href="https://github.com/hallallisongrace" ><FontAwesomeIcon icon={faGithub}/></a> 
    <a href="https://linkedin.com/in/hallallisongrace" ><FontAwesomeIcon icon={faLinkedin}/></a> 
     </div>
     </div>
    

  


<div className="legalinfo">
<p>Site by TGR Agency</p>
<p>Copyright TGR Agency 2021</p>
<p>Terms & Conditions | Privacy | Legal Notice</p>
</div>

</div>

    </footer>




    )
  }
}
export default Footer;


