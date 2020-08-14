const initialState = {
    username: '',
    user_id: '',
    profilePic: ''
}


const GET_USER = "GET_USER"

export function addUserToState (user_id, username) {
    return {
        type: GET_USER,
        payload: {user_id, username}
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, user_id: action.payload.user_id, username: action.payload.username, profilePic: action.payload.profilePic };
        default:
            return state
    }
}