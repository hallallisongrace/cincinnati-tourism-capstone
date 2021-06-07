import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Viewattrac.css';





class Attraction extends Component {
  render() {
    return(
      
  
        <div className="attraction-cards">
      
          <div className="card-body">
            <img alt="" className="img" src={this.props.img}/>
            <h2 className="attraction-h2">{this.props.title}</h2>
            <p className="attraction-p">{this.props.paragraph}.</p>
            <h5 className="attraction-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div>
            
            </a>

            
          </div>
        </div>

  


    )
  }

}

class AttractionCards extends Component {
  render() {
    
    return (
  
     <>
<div id="parallax-world-of-ugg">



 <section>
<div className="parallax">
<h2>Attractions in the Queen</h2>
</div>
</section> 


    </div>

      <div className='cards'>

    
        <Attraction
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Union%20Terminal%20Robert%20Webber.jpg'
         title="Cincinnati Museum Center"

         paragraph='Cincinnati Museum Center or Union Terminal,as some may call it, is a museum complex operating out of the Cincinnati Union Terminal in the Queensgate neighborhood of Cincinnati, Ohio. It houses museums, theaters, a library, and a symphonic pipe organ, as well as special traveling exhibitions'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincymuseum.org/'/>

  
        
        <div class="parrallax-content2">
  <div class="parrallax2">
  </div>
  </div>


         <Attraction
         img='https://images.unsplash.com/photo-1465779171454-aa85ccf23be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0OTg4MjI5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
         title='Kings Island'
         paragraph="Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company."
         stars='4/5 stars'
         btn='Visit Website'
         link='https://www.visitkingsisland.com/' />
     

     <div class="parrallax-content3">
  <div class="parrallax3">
  </div>
</div>

         <Attraction

         img='https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/03_Smale-Riverfront-Park_website-1800x1196.jpg '
         title='The Banks'
         paragraph='The Banks is an electrifying cityscape, buzzing and bustling with thousands of people reigniting their passion, by day and night, for the City we all love.'
         stars='4.5/5 stars' 
         btn='Visit Website'
         link='http://thebankscincy.com/'/>

<div class="parrallax-content4">
  <div class="parrallax4">
  </div>
</div>

         <Attraction
         img='https://images.squarespace-cdn.com/content/v1/5c094a9725bf026a08cb9f9f/1584034029640-L2S48JS90472UKQCWKAD/ke17ZwdGBToddI8pDm48kF2qYZC9TsAyDXOBJpYiDRoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqnp59hRngHm1gGB_D5aR4mYvjnSitYzC8sD-2FKZxEJ_URRrhB8CzNfPRZ5O8gKc/home_FindlayMarket.jpg?format=2500w'
         title='Findlay Market'
         paragraph=" Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions, welcoming more than one million visitors each year. At Findaly Market you can find tons of fresh fruit, vegtables, seafoo, meat and more. There are tons of vendors and something for everyone to engage in."
         stars='4.8/5 stars'
         btn='Visit Website'
         link='https://www.findlaymarket.org/' />
         

         <div class="parrallax-content5">
  <div class="parrallax5">
  </div>
</div>
     

         <Attraction
         img='https://fowlingwarehouse.com/wp-content/uploads/2018/09/fw-lanes-home3.jpg'
         title='Fowling'
         paragraph='Football plus bowling equals tons of fun. Fowling is a new growing attraction in the Cincinnati area. Fowling is great for a night outing with fmaily and friends.'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://fowlingwarehouse.com/cincinnati-oh/' />

<div class="parrallax-content6">
  <div class="parrallax6">
  </div>
</div>

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