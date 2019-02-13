import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store'
import './index.css';
import App from './App';
import AddMemberOrg from './components/OragnisationPanel/AddMemberOrg'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('root')
// );
ReactDOM.render(<AddMemberOrg/>,document.getElementById('root'));

