
const initialState = {
    username: '',
    email: '',
    password: '',
}

const authentication = (state=initialState, action) =>  {
    switch(action.type){
        case 'LOGIN_REQUEST': 
            return {
                loggingIn: true,
                user: action.user
            }
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {};

        case 'LOGOUT':
            return {};

        default:
            return state
    }
}


export default authentication;