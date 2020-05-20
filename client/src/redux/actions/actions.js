export const alertActions = {
    error,
    success
}

const error = message => {
    return {
        type: 'ERROR', 
        message,
    }
}


const success = message => {
    return {
        type: 'SUCCESS', 
        message,
    }
}