import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';


function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
            </ul>
            <Route path="/" exact={true} component={App}/>
        </Router>
    );
}

export default AppRouter;