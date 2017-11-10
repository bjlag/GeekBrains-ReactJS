import React, { Component } from 'react';

import Tags from './Tags';

const tags = [
    {
        name: 'general',
        href: '#'
    },
    {
        name: 'videos',
        href: '#'
    },
    {
        name: 'music',
        href: '#'
    },
    {
        name: 'media',
        href: '#'
    },
    {
        name: 'photography',
        href: '#'
    },
    {
        name: 'parallax',
        href: '#'
    },
    {
        name: 'ecommerce',
        href: '#'
    },
    {
        name: 'terms',
        href: '#'
    },
    {
        name: 'coupons',
        href: '#'
    },
    {
        name: 'modern',
        href: '#'
    }
];

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar nobottommargin col_last clearfix">
                <div className="sidebar-widgets-wrap">
                    <div className="widget clearfix">
                        <h4>{this.props.title}</h4>
                        <Tags items={tags}/>
                    </div>
                </div>

            </div>
        );
    }
}