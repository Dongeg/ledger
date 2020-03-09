import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './assets/css/common.scss'
import {Provider} from 'react-redux'
import  store from './store'
import './mockData'
import App from './App';
import * as serviceWorker from './serviceWorker';
const RenderApp = (
    <Provider store={store}>
        <App></App>
    </Provider>
)
ReactDOM.render(RenderApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
