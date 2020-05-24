export const responseActions = {
    request,
    success,
    failure
}


const request = user => { 
    return { type: 'LOGIN_REQUEST', user } 
}
const success = user => { 
    return { type: 'LOGIN_SUCCESS', user } 
}
const failure = error => { 
    return { type: 'LOGIN_FAILURE', error } 
}