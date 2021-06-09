import React, { Component } from 'react';
import axios from 'axios';
import './contact.css';
import {BACKEND_URL} from './config';

 
 class Contact extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        messahe: " ",
        phone: " ",
      } 
    }



  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeMessage(e){
    this.setState({
      question: e.target.value
    })
  }
  onChangePhone(e){
    this.setState({
      question: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
     message: this.state.message,
      phone: this.state.phone
    }
    console.log(contact)
    axios.post(BACKEND_URL + 'contact/add', contact)
    .then(res=>console.log(res.data));
    this.props.history.push('/');

    fetch(contact).then((response) => {
      console.log(response);
      response.json().then((data) => {
          console.log(data);
      });
  });
    this.setState({
        name: '',
        email: '',
        message: '',
        phone: '',
    })
    window.alert('Thank you sending us a message')
    console.log(contact)
  }
  render() {
    return (
  
      <div>
      <div className="body3">
      <form id='contact-form' onSubmit={this.onSubmit}>
      <div className="titlecontact">
          <h3 className='text-center'>Let's Chat!</h3>
          <h4>Leave us a message below</h4>

</div>
          <div className="containerContact">
          <div class="container">
  <div class="row header">
    <h1>CONTACT US</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div class="row body">
    
    <div className="form-group">
                 <label> Name</label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.name}
               onChange={this.onChangeName}
              />
    </div>
    <div className="form-group">
         <label>Email</label>
           <input 
            type="email"
            required
            className='form-control'
            value={this.state.email}
            onChange={this.onChangeEmail}
          />

    </div>
    <div className="form-group">
    <label>Leave us a short message! </label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.message}
               onChange={this.onChangeMessage}
              />
    </div>

    <div className="form-group">
    <label>Phone Number</label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.phone}
               onChange={this.onChangePhone}
              />
    </div>
    
             <div className="form-group">
           
            </div>
         <div className="form-group">
        <input class="btn btn-sumbit" type="sumbit" value="Sumbit"/>
            </div>

</div>
</div>            </div>
          </form> 
           </div> 
            </div>
      

      
    
   )
    
}
}




export default  (Contact); 