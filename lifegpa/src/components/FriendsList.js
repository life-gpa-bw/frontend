import React from "react";
import { connect } from "react-redux";
import { addFriend, toggleBesties } from "../actions";

class FriendsList extends React.Component {
  state = {
    newFriend: ""
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onClick = e => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriend);
  };

  onListClick = name => this.props.toggleBesties(name);

  render() {
    return (
      <>
        <ul>
          {this.props.friends.map(friend => {
            return (
              <li
                key={friend.name}
                onClick={() => this.onListClick(friend.name)}
              >{`${friend.name} is bestie?: ${friend.besties}`}</li>
            );
          })}
        </ul>
        <form>
          <input
            name="newFriend"
            onChange={this.onInputChange}
            value={this.state.newFriend}
          />
          <button onClick={this.onClick}>Add Friend</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriend, toggleBesties }
)(FriendsList);