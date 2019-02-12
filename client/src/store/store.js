import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {userReducer} from './reducers/userReducer';
import {organisationReducer} from './reducers/organisationReducer'; 

const cheifReducer =  combineReducers({
  reducedUser: userReducer,
  reducedOrganisation: organisationReducer
})

const store = createStore(cheifReducer, compose(applyMiddleware(thunk),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;