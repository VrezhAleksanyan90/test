import {Provider} from "react-redux";
import ReactDom from 'react-dom';
import store from "./store";
import React from 'react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);