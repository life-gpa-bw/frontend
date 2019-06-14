import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
    
          username: '',
    
          password: ''
    
        };
      }

      // add change handler function
      // Does this one work? What should i change value to? username or password?
      handleChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        });
      };
    


      // submit login info function
      loginSubmit = () => {
        axios
            .post('https://life-gpa-be.herokuapp.com/api/login', this.state )
            .then(response => {
              localStorage.setItem('username', response.data.token)
              })
            .catch(err => {
                console.log(err.message)
                })
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.loginSubmit} >
                        <input 
                        type='text'
                        onChange={this.changeHandler}
                        name='username'
                        placeHolder='Enter your username.'
                        />
                        
                        <input 
                        type='text'
                        onChange={this.changeHandler}
                        name='password'
                        placeHolder='Enter your password.'
                        />
                    </form>
                    
                </div>
        )
    }
}