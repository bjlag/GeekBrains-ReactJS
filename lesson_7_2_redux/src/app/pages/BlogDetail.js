import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchBlogDetails } from '../actions/blogDetailsAction';

import PageTitle from '../components/PageTitle';
import BlogContent from '../components/BlogContent';
import Sidebar from '../components/Sidebar';
import Preloader from '../components/Preloader';

@connect( ( store ) => {
    return {
        data: store.blogDetails.data,
        isFetching: store.blogDetails.isFetching
    };
} )

export default class BlogDetail extends Component {
    constructor() {
        super( ...arguments );

        this.props.dispatch( fetchBlogDetails( this.props.params.blogId ) );
    }

    render() {
        return (
            <div>
                <PageTitle title={ this.props.data.title } description={ `Пост №${ this.props.data.id }` }/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <BlogContent>
                                <Preloader show={ this.props.isFetching }/>
                                { this.props.data.body }/>
                            </BlogContent>
                            <Sidebar title={'Tag cloud'}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}