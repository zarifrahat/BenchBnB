import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER  } from '../actions/session_actions';


export default (state = {}, action) =>{
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.user }); // MAYBE THIS INSTEAD [action.user.id]: action.user 
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default: 
            return state;
    }
}