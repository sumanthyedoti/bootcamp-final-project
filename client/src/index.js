import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store'
import './index.css';
import App from './App';
import AddMemberOrg from './components/OragnisationPanel/AddMemberOrg'
import DeleteMemberOrg from './components/OragnisationPanel/DeleteMemberOrg';
import AddNewGroup from './components/OragnisationPanel/AddNewGroup';
import AddMemberGroup from './components/OragnisationPanel/AddMemberGroup';
import DeleteMemberGroup from './components/OragnisationPanel/DeleteMemberGroup'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('root')
// );
ReactDOM.render(<div><AddMemberGroup/><DeleteMemberGroup/></div>,document.getElementById('root'));

