import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchBlogItems } from '../actions/blogActions';

import PageTitle from '../components/PageTitle';
import BlogContent from '../components/BlogContent';
import Sidebar from '../components/Sidebar';
import BlogItem from '../components/BlogItem';
import Pagination from '../components/Pagination';
import Preloader from '../components/Preloader';

@connect( ( store ) => {
    return {
        items: store.blogItems.items,
        isFetching: store.blogItems.isFetching
    }
} )

export default class Blog extends Component {
    constructor() {
        super( ...arguments );

        this.props.dispatch( fetchBlogItems() );
    }

    render() {
        if ( !this.props.children ) {
            return (
                <div>
                    <PageTitle title={'Блог'} description={'Наши последние новости'}/>
                    <section id="content">
                        <div className="content-wrap">
                            <div className="container clearfix">
                                <BlogContent>
                                    <Preloader show={ this.props.isFetching }/>
                                    <BlogItem items={ this.props.items }/>
                                    <Pagination/>
                                </BlogContent>
                                <Sidebar title={'Tag cloud'}/>
                            </div>
                        </div>
                    </section>
                </div>
            );

        } else {
            return (
                this.props.children
            );
        }
    }
}