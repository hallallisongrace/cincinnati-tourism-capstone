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
      <div className="titlecontact">
          <h3 className='text-center'>Let's Chat!</h3>
          <h4>Leave us a message below</h4>

</div>
          <div className="containerContact">
            <div className="contentContact">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  >
                  </input>
             
                  <label>Email:</label>
                  <input
                  type="email"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  >
                  </input>
            
                <label>Messages:</label>
                  <textarea
                  type="text"
                  className="form-control"
                  value={this.state.question}
                  onChange={this.onChangeQuestion}
                  rows='5'
                  cols='8'
                  >
                  </textarea>
              </div>
              <div className="form-group">
                  <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary"
                  />
              </div>  
            </form>
            </div>
            </div>
            <div className="content">
          </div>
          </div>
      </div>



    )
  }
}



export default Contact; 