export const responseActions = {
    request,
    success,
    failure
}


const request = user => { 
    return { type: userConstants.LOGIN_REQUEST, user } 
}
const success = user => { 
    return { type: userConstants.LOGIN_SUCCESS, user } 
}
const failure = error => { 
    return { type: userConstants.LOGIN_FAILURE, error } 
}