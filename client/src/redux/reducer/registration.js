

const registration = (state={}, action) =>  {
    switch(action.type){
        case 'REGISTRATION_REQUEST': 
            return {
               registering: true
            }
        case 'REGISTRATION_SUCCESS':
            return {};
        case 'REGISTRATION_FAILURE':
            return {};
        default:
            return state
    }
}


export default registration;