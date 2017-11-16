import React, { Component } from 'react';

import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default class BlogList extends Component {
    render() {
        return (
            <div id="wrapper" className="clearfix">
                <Header/>
                <PageTitle title={'Blog'} description={'Our Latest News'}/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}