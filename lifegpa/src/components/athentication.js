import React from 'react'
import axios from "axios";

axios
  .post("https://life-gpa-be.herokuapp.com/api/habits", quote)
  .then(response => {
    console.log(response);
    this.setState({
      postSuccessMessage: response.data.successMessage, //should this not take me to my app after login is successful?
      postError: ""
    });
  })
  .catch(err => {
    console.log(err);
    this.setState({
      postSuccessMessage: "",
      postError: err.response.data.Error
    });
  });


{
  headers: {
    Authorization: localStorage.token
  }
}

<PostMovieQuoteForm
  postMessage={this.postMessage}
  postSuccessMessage={this.state.postSuccessMessage}
/>