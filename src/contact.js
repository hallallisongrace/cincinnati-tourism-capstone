import React, { Component } from 'react';


// import axios from 'axios';
import './contact.css';


import Header from './navbar'; //Include Heder
import Footer from './footer'; 

 class Contact extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        question: " ",
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
  onChangeQuestion(e){
    this.setState({
      question: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
    }
    console.log(contact)
    // axios.post(BACKEND_URL + 'contact/add', contact)
    fetch(contact).then((response) => {
      console.log(response);
      response.json().then((data) => {
          console.log(data);
      });
  });
    this.setState({
        name: '',
        email: '',
        message: ''
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
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="John"
               className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
 />
          </p>
        
          <p class="pull-right">
            <label for="last_name">last name</label>
            <input type="text" name="last_name" placeholder="Smith"                   className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
/>      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="46" rows="3" name="comments"                   className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
></textarea>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="Submit" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
</div>

            </div>
            <div className="content">

    
  
          </div>
          </form>
          </div>
      </div>



    )
  }
}




export default Contact; 