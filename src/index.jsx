import  React from 'react';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppRouter from './router';

import 'antd/dist/antd.css';
import './static/style/common.less';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root'));

