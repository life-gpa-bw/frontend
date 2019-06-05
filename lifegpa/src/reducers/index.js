import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
} from '../actions';


const initialState = {
    friends:[],
    error: '',
    isLoggingIn: false,
    fetchingFriends: false
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
        case LOGIN_SUCCESS: 
        return {
            ...state,
            isLoggingIn: false,
            error: ''
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            isLoggingIn: false
        }

        case FETCH_FRIENDS_START:
        return {
            ...state,
            fetchingFriends: true,
            error: false
        }
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            fetchingFriends: false,
            error: '',
            friends: action.payload
        }

        default:
        return state;
    }
}