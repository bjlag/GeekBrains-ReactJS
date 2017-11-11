import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import PageTitle from './components/PageTitle';
import Content from './components/Content';
import Footer from './components/Footer';

const app = document.getElementById( 'app' );

ReactDOM.render( (
    <div id="wrapper" className="clearfix">
        <Header/>
        <PageTitle title={'Blog'} description={'Our Latest News'}/>
        <Content/>
        <Footer/>
    </div>
), app );