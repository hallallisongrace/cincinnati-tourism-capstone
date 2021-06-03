import React, {Component} from 'react';
// import 'viewattra.css'

class Attraction extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="attraction-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="attraction-h2">{this.props.title}</h2>
            <p className="attraction-p">{this.props.paragraph}.</p>
            <h5 className="attraction-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
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
      <div class="header">
      <div className="attraction-banner">
       </div>
      </div>
      <div className='cards'>
        <Attraction
         img=''
         title='Cincinnati Museum Center'
         paragraph=''
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincymuseum.org/' />
        <Attraction
         img=''
         title='Taft Art Museum '
         paragraph=""
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.taftmuseum.org/?gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ7rxXS8bpFVB-82UxfayLDOOC59kFJkYo-7MO2BJyKLcUGv4GnCVygaAjLiEALw_wcB' />
         <Attraction
         img=''
         title='Cincinnati Zoo'
         paragraph=''
         stars='4/5 stars'
         btn='Visit Website'
         link='http://cincinnatizoo.org/' />
         <Attraction
         img=''
         title=''
         paragraph="The Banks"
         stars='4.5/5 stars' 
         btn='Visit Website'
         link='http://thebankscincy.com/'/>
         <Attraction
         img=''
         title='Findlay Market'
         paragraph=""
         stars='4.8/5 stars'
         btn='Visit Website'
         link='https://www.findlaymarket.org/' />
         <Attraction
         img=''
         title='Smale Riverfront Park'
         paragraph=''
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/' />
         <Attraction
         img=''
         title='Selfie City'
         paragraph=""
         stars='5/5 stars'
         btn='Visit Website'
         link='http://www.selfiecitycincy.cim==om/' />
     </div>

     </>
    )
  }
}



export default (Attraction, AttractionCards)