import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleDaily } from "../../actions";
import "./Daily.css";

class DailyHabit extends Component {
  state = {
    reported: false
  };

  componentDidMount() {}

  handleToggle = e => {
    e.preventDefault();

    let newPoints = this.props.habit.completionPoints;
    let isCompleted = this.props.habit.completed;

    if (this.state.reported === false) {
      if (e.target.id === "yes") {
        isCompleted = 1;
        newPoints = newPoints + 1;
      } else {
        isCompleted = 0;
      }
    }
    if (this.state.reported && this.props.habit.completed === 1) {
      if (e.target.id === "yes") {
        isCompleted = 1;
      } else {
        isCompleted = 0;
        newPoints = newPoints - 1;
      }
    }
    if (this.state.reported && this.props.habit.completed === 0) {
      console.log("state 7");
      if (e.target.id === "yes") {
        console.log("state 8");
        isCompleted = 1;
        newPoints = newPoints + 1;
      } else {
        console.log("state 9");
        isCompleted = 0;
      }
    }
    console.log("newpoints after", newPoints);
    console.log("isCompleted after", isCompleted);
    console.log("reported after", this.state.reported);

    const updatedHabit = {
      completed: isCompleted,
      completionPoints: newPoints
    };
    console.log(updatedHabit);
    this.props.toggleDaily(this.props.habit.id, updatedHabit);

    this.setState({
      reported: true
    });
  };

  render() {
    console.log(this.state.reported, this.props.habit.completed);

    if (this.state.reported === false) {
      return (
        <div className="daily-habit">
          <div className="daily-habit-name">{this.props.habit.habitTitle}</div>
          <div className="daily-habit-buttons">
            <button
              onClick={this.handleToggle}
              id="yes"
              className="daily-habit-yes"
            >
              Yes
            </button>
            <button
              onClick={this.handleToggle}
              id="no"
              className="daily-habit-no"
            >
              No
            </button>
          </div>
        </div>
      );
    } else if (
      this.state.reported === true &&
      this.props.habit.completed === 0
    ) {
      return (
        <div className="daily-habit">
          <div className="daily-habit-name-no">
            {this.props.habit.habitTitle}
          </div>
          <div className="daily-habit-buttons">
            <button
              onClick={this.handleToggle}
              id="yes"
              className="daily-habit-yes"
            >
              Yes
            </button>
            <button
              onClick={this.handleToggle}
              id="no"
              className="daily-habit-no"
            >
              No
            </button>
          </div>
        </div>
      );
    } else if (
      this.state.reported === true &&
      this.props.habit.completed === 1
    ) {
      return (
        <div className="daily-habit">
          <div className="daily-habit-name-yes">
            {this.props.habit.habitTitle}
          </div>
          <div className="daily-habit-buttons">
            <button
              onClick={this.handleToggle}
              id="yes"
              className="daily-habit-yes"
            >
              Yes
            </button>
            <button
              onClick={this.handleToggle}
              id="no"
              className="daily-habit-no"
            >
              No
            </button>
          </div>
        </div>
      );
    }
  }
}

// const mapStateToProps = state => ({
//     habit: state.dailyReducer.habit,
//     reported: state.dailyReducer.reported,
//     completed: state.dailyReducer.habit.completed
//   });
  
//   export default connect(
//     mapStateToProps,
//     { toggleDaily }
//   )(DailyHabit);

  export default connect(
    state => ({
        habit: state.dailyReducer.habit,
        reported: state.dailyReducer.reported,
        completed: state.dailyReducer.habit.completed
    }),
    {toggleDaily}
  )(DailyHabit);