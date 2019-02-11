import  {POST_POST, SIGNIN, SIGNUP} from '../actions/types';

const initialState = {
  // Username: '',
  // name: '',
}

export function userReducer (state=initialState, {type, payload}) {
  console.log(payload)
  switch(type){
    case POST_POST:
      return {
        ...state,
      }
    case SIGNIN:
    return{
      ...state,
      ...payload
    }
    case SIGNUP:
    return{
      ...state,
      
    }
    default: 
      return state;
  }
}
