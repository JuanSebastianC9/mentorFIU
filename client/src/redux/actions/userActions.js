import { alertActions } from './actions';
import { responseActions } from './responseActions'
export const userActions = {
    login,
    register,
    logout
}

//dispatch logion request action
const login = (username, password) => {
    return dispatch => {
        dispatch(request({username}));
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





