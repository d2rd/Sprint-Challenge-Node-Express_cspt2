import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import ProjectForm from './components/ProjectForm'
// import Projects from './components/Projects'
// import UpdateProjectForm from './components/UpdateProjectForm';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import combineReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);