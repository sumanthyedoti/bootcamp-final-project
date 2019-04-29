import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {userReducer} from './reducers/userReducer'
import {postReducer} from './reducers/postReducer'
import {organisationReducer} from './reducers/organisationReducer'; 

const cheifReducer =  combineReducers({
  reducedUser: userReducer,
  reducedPosts: postReducer,
  reducedOrganisation: organisationReducer
})

const store = createStore(cheifReducer, compose(applyMiddleware(thunk)));

export default store;