import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer

class Attraction extends Component {
  render() {
    return(

      <div className="main">
          <Header></Header>

        <div className="attraction-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="attraction-h2">{this.props.title}</h2>
            <p className="attraction-p">{this.props.paragraph}.</p>
            <h5 className="attraction-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
        <Footer></Footer>

      </div>
  
    )
  }

}

class AttractionCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="attraction-banner">
       </div>
      </div>
      <div className='cards'>
        <Attraction
         img=''
         title='Cincinnati Museum Center'
         paragraph='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Union%20Terminal%20Robert%20Webber.jpg'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincymuseum.org/' />
        <Attraction
         img='https://media.bizj.us/view/img/11205915/artmuseum*1200xx1800-1013-0-94.jpg'
         title='Taft Art Museum '
         paragraph=""
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.taftmuseum.org/?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ7rxXS8bpFVB-82UxfayLDOOC59kFJkYo-7MO2BJyKLcUGv4GnCVygaAjLiEALw_wcB' />
         <Attraction
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWuq1KO5brvna0rILN0oiGp3RNW_QTIdGhQ&usqp=CAU'
         title='Kings Island'
         paragraph="Family fun for everyone.  "
         stars='4/5 stars'
         btn='Visit Website'
         link='https://www.visitkingsisland.com/' />
         <Attraction
         img='https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/03_Smale-Riverfront-Park_website-1800x1196.jpg'
         title=''
         paragraph="The Banks"
         stars='4.5/5 stars' 
         btn='Visit Website'
         link='http://thebankscincy.com/'/>
         <Attraction
         img='https://images.squarespace-cdn.com/content/v1/5c094a9725bf026a08cb9f9f/1584034029640-L2S48JS90472UKQCWKAD/ke17ZwdGBToddI8pDm48kF2qYZC9TsAyDXOBJpYiDRoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqnp59hRngHm1gGB_D5aR4mYvjnSitYzC8sD-2FKZxEJ_URRrhB8CzNfPRZ5O8gKc/home_FindlayMarket.jpg?format=2500w'
         title='Findlay Market'
         paragraph=""
         stars='4.8/5 stars'
         btn='Visit Website'
         link='https://www.findlaymarket.org/' />
         <Attraction
         img=''
         title='Fowling'
         paragraph='https://fowlingwarehouse.com/wp-content/uploads/2018/09/fw-lanes-home3.jpg'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://fowlingwarehouse.com/cincinnati-oh/' />
         <Attraction
         img='https://static.wixstatic.com/media/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.jpg/v1/fill/w_1366,h_761,al_c,q_85/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.webp'
         title='Selfie City'
         paragraph=""
         stars='5/5 stars'
         btn='Visit Website'
         link='http://www.selfiecitycincy.com/' />
     </div>

     </>
    )
  }
}



export default (Attraction, AttractionCards);