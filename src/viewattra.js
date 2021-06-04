import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Viewattrac.css';



import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer


class Attraction extends Component {
  render() {
    return(

      <div className="main">
      

        <div className="attraction-card">
          <div className="card-body">
            <img alt="" className="img" src={this.props.img}/>
            <h2 className="attraction-h2">{this.props.title}</h2>
            <p className="attraction-p">{this.props.paragraph}.</p>
            <h5 className="attraction-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div>
            
            </a>
          </div>
        </div>

      </div>
  
    )
  }

}

class AttractionCards extends Component {
  render() {
    return (
      <>
      <div class="headerva">
      <div className="attraction-banner">
       </div>
      </div>
      <div className='cards'>
        <Attraction
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Union%20Terminal%20Robert%20Webber.jpg'
         title="Cincinnati Museum Center"

         paragraph='Cincinnati Museum Center or Union Terminal,as some may call it, is a museum complex operating out of the Cincinnati Union Terminal in the Queensgate neighborhood of Cincinnati, Ohio. It houses museums, theaters, a library, and a symphonic pipe organ, as well as special traveling exhibitions'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincymuseum.org/'/>
        <Attraction
         img='https://media.bizj.us/view/img/11205915/artmuseum*1200xx1800-1013-0-94.jpg'
         title='Taft Art Museum '
         paragraph="The Cincinnati Art Museum is an art museum in the Eden Park neighborhood of Cincinnati, Ohio. Founded in 1881, it was the first purpose-built art museum west of the Alleghenies, and is one of the oldest in the United States. The art museum has different exhibits throughout the year."
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.taftmuseum.org/?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ7rxXS8bpFVB-82UxfayLDOOC59kFJkYo-7MO2BJyKLcUGv4GnCVygaAjLiEALw_wcB' />
         <Attraction
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWuq1KO5brvna0rILN0oiGp3RNW_QTIdGhQ&usqp=CAU'
         title='Kings Island'
         paragraph="Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company."
         stars='4/5 stars'
         btn='Visit Website'
         link='https://www.visitkingsisland.com/' />
         <Attraction
         img='https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/03_Smale-Riverfront-Park_website-1800x1196.jpg'
         title='The Banks is an electrifying cityscape, buzzing and bustling with thousands of people reigniting their passion, by day and night, for the City we all love.'
         paragraph="The Banks"
         stars='4.5/5 stars' 
         btn='Visit Website'
         link='http://thebankscincy.com/'/>
         <Attraction
         img='https://images.squarespace-cdn.com/content/v1/5c094a9725bf026a08cb9f9f/1584034029640-L2S48JS90472UKQCWKAD/ke17ZwdGBToddI8pDm48kF2qYZC9TsAyDXOBJpYiDRoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqnp59hRngHm1gGB_D5aR4mYvjnSitYzC8sD-2FKZxEJ_URRrhB8CzNfPRZ5O8gKc/home_FindlayMarket.jpg?format=2500w'
         title='Findlay Market'
         paragraph=" Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions, welcoming more than one million visitors each year. At Findaly Market you can find tons of fresh fruit, vegtables, seafoo, meat and more. There are tons of vendors and something for everyone to engage in."
         stars='4.8/5 stars'
         btn='Visit Website'
         link='https://www.findlaymarket.org/' />
         <Attraction
         img='https://fowlingwarehouse.com/wp-content/uploads/2018/09/fw-lanes-home3.jpg'
         title='Fowling'
         paragraph='Football plus bowling equals tons of fun. Fowling is a new growing attraction in the Cincinnati area. Fowling is great for a night outing with fmaily and friends.'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://fowlingwarehouse.com/cincinnati-oh/' />
         <Attraction
         img='https://static.wixstatic.com/media/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.jpg/v1/fill/w_1366,h_761,al_c,q_85/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.webp'
         title='Selfie City'
         paragraph="Selfie City is a one of kind art studio. Filled with 6 exhbits all different themed. Selfie City is the place to come for a fmaily outing, birthday parties, or just to take picutres!"
         stars='5/5 stars'
         btn='Visit Website'
         link='http://www.selfiecitycincy.com/' />
     </div>

     </>
    )
  }
}



export default (Attraction, AttractionCards);