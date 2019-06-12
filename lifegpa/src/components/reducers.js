import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
    todos: [
        {todo: 'Start a revolution', status: false, id:0},
        {todo: 'Save humanity', status: false, id:1}
    ],
    count:1
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        const idCounter = ++state.count;
        const newState = [...state.todos, {todo: action.payload, completed: false, id: idCounter}]
        return {
            ...state, 
            todos: newState,
            count: idCounter
        };

        case TOGGLE_TODO:
        return {
            ...state, 
            todos: state.todos.map ( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, 
                        status: !todo.status
                    };
                }
                return todo;
            })
        }; 

        case REMOVE_TODO:

        return {
        ...state, 
            todos: state.todos.filter (todo => todo.id !== action.payload)
        };

        default: 
        return state;
    }
}