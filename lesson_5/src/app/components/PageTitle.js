import React, { Component } from 'react';

import BreadCrumb from './BreadCrumb';

const itemsBreadCrumbs = [
    {
        name: 'Home',
        href: '#'
    },
    {
        name: 'Blog',
        href: ''
    }
];

export default class PageTitle extends Component {
    render() {
        return (
            <section id="page-title">
                <div className="container clearfix">
                    <h1>{this.props.title}</h1>
                    <span>{this.props.description}</span>
                    <BreadCrumb items={itemsBreadCrumbs}/>
                </div>
            </section>
        );
    }
}