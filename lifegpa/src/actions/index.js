export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_FRIEND = "ADD_FRIEND";
export const TOGGLE_BESTIES = "TOGGLE_BESTIES";

export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

export function addFriend(newFriend) {
  return {
    type: ADD_FRIEND,
    payload: newFriend
  };
}

export function toggleBesties(name) {
  return {
    type: TOGGLE_BESTIES,
    payload: name
  };
}