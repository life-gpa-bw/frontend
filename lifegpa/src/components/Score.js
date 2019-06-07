import React from 'react';

const Score = React.createClass({
    incrementCount: function(){
      this.setState({
        count: this.state.count + 1
      });
    },
    decrementCount: function(){
      this.setState({
        count: 0
      });
    },
    getInitialState: function(){
       return {
         count: 0
       }
    },
    render: function(){
      return (
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button className="btn" onClick={this.incrementCount}>+1</button>
          <button className="btn" onClick={this.decrementCount}>Reset</button>
        </div>
      );
    }
  });

  export default Score;