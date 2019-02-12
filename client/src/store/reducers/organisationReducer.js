import {CREATE_NEW} from '../actions/types';

const initialState = {
   newOrganisation:{}
}

export function organisationReducer (state=initialState, {type, payload}) {
  console.log(payload)
  switch(type){
    case CREATE_NEW:
      console.log('org')
      return {
        ...state,
        newOrganistaion:payload
      }

    default: 
      return state;
  }
}