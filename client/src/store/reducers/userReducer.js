import {POST_POST} from '../actions/types';

const initialState = {
  
}

export function userReducer (state=initialState, {type, payload}) {
  switch(type){
    case POST_POST:
      return {
        ...state,
      }
    default: 
      return state;
  }
}
