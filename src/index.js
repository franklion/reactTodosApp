import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import TodoAppContainer from './containers/TodoAppContainer';
import CounterContainer from './containers/CounterContainer';


let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('main')
);
