import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import es6Promise from 'es6-promise';
import es6ObjectAssign from 'es6-object-assign';
import 'isomorphic-fetch';
es6Promise.polyfill();
es6ObjectAssign.polyfill();

import AppContainer from './components/app-container';
import rootReducer from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDom.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
