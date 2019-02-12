import  {POST_POST, GET_POSTS, SIGNIN, SIGNUP} from '../actions/types';

const initialState = {
  user: {},
}

export function userReducer (state=initialState, {type, payload}) {
  console.log(payload)
  switch(type){
    case SIGNIN:
    return{
      ...state,
      user: payload,
    }
    case SIGNUP:
    return{
      ...state,
      
    }
    default: 
      return state;
  }
}
