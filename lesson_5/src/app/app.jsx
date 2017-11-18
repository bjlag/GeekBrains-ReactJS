import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LayoutMain from './layouts/Main';
import Blog from './pages/Blog';
import BlogError from './pages/BlogError';
import Portfolio from './pages/Portfolio';
import Error404 from './pages/Error404';

const app = document.getElementById( 'app' );

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ LayoutMain }>
            <IndexRoute component={ Blog }/>
            <Route path="blog-error/" component={ BlogError }/>
            <Route path="portfolio/" component={ Portfolio }/>
            <Route path="*" component={ Error404 }/>
        </Route>
    </Router>
, app );