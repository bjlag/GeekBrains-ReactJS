import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from '../app/stores/store';

import Main from './layouts/Main';
import Index from './pages/Index';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Users from './pages/Users';
import Error404 from './pages/Error404';

const app = document.getElementById( 'app' );

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ Main }>
                <IndexRoute component={ Index }/>
                <Route path="blog/" component={ Blog }>
                    <Route path=":blogId" component={ BlogDetail } />
                </Route>
                <Route path="users/" component={ Users }/>
                <Route path="*" component={ Error404 }/>
            </Route>
        </Router>
    </Provider>
, app );