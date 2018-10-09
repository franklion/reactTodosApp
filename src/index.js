import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoApp from './reducers';
// import TodoAppContainer from './containers/TodoAppContainer';
// import UsersContainer from './containers/UsersContainer';

import BmiContainer from './pages/bmi/BmiContainer'
import CounterContainer from './pages/counter/CounterContainer'

import 'antd/dist/antd.css'


let store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);


ReactDOM.render(
    <Provider store={store}>
        <BmiContainer />
    </Provider>,
    document.getElementById('main')
);
