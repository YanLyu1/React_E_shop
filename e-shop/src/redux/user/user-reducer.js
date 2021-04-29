//user reducer is going to be that reducer that will store the state of our current user
//It is moved from the state of App.js
//this reducer should be exported to the rootReducer later

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;