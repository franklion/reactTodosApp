import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom'
import todoApp from './reducers';


import TodosContainer from './pages/todos/TodosContainer'
import UserContainer from './pages/users/UserContainer'
import BmiContainer from './pages/bmi/BmiContainer'
import CounterContainer from './pages/counter/CounterContainer'

import 'antd/dist/antd.css'


let store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);


ReactDOM.render(
    <BrowserRouter>
        <HashRouter>
            <Provider store={store}>
                <section>
                    <Route path="/bmi" component={ BmiContainer }/>
                    <Route path="/counter" component={ CounterContainer } />
                    <Route path="/users" component={ UserContainer } />
                    <Route path="/todos" component={ TodosContainer }/>
                </section> 
            </Provider>
        </HashRouter>
      </BrowserRouter>,
    document.getElementById('main')
);
