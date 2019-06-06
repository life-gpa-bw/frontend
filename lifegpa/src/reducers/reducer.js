import { UPDATE_TITLE, ADD_FRIEND, TOGGLE_BESTIES } from "../actions";

const initialState = {
  title: "Title from Redux store",
  friends: [
    { name: "Clint", besties: true },
    { name: "Caitlin", besties: false }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case ADD_FRIEND:
      const newFriend = {
        name: action.payload,
        besties: false
      };
      const friends = [...state.friends];
      friends.push(newFriend);
      return {
        ...state,
        friends
      };
    case TOGGLE_BESTIES:
      const filteredFriends = state.friends.filter(friend => {
        if (friend.name === action.payload) {
          friend.besties = true;
        } else {
          friend.besties = false;
        }
        return friend;
      });
      return {
        ...state,
        friends: filteredFriends
      };

    default:
      return state;
  }
}

export default reducer;