import { alertActions } from './actions';
import { responseActions } from './responseActions'
export const userActions = {
    login,
}

//dispatch logion request action to the store
const login = (username, password) => {
    return dispatch => {
        dispatch(responseActions.request({username}));
        userService.login(username, password
            .then(
                res => {
                dispatch(responseActions.success(res));
            },
                error => {
                    dispatch(responseActions.failure(error));
                    dispatch(alertActions.error(error.toString()))
            }));
    }
}

//dispatch logout request action to the store
const logout = () => {
    userService.logout();
    return {
        type: 'LOGOUT',
    }
}

//dispatch register request action to the store
const register = (user) => {
    return dispatch => {
        dispatch(responseActions.request(user))
        userService.register(user
            .then(
                user => {
                    dispatch(alertActions.success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ))};
};



