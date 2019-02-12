import  {POST_POST, GET_POSTS, SIGNIN, SIGNUP} from '../actions/types';

const initialState = {
  user: {},
  posts: [],
}

export function userReducer (state=initialState, {type, payload}) {
  console.log(payload)
  switch(type){
    case POST_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      }
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      }
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
