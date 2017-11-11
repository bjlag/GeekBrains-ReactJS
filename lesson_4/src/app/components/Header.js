import React, { Component } from 'react';

import Logo from './Logo';
import Menu from './Menu';

const itemsMenu = [
    {
        name: 'Home',
        href: '#',
        current: false
    },
    {
        name: 'Features',
        href: '#',
        current: false
    },
    {
        name: 'Portfolio',
        href: '#',
        current: false
    },
    {
        name: 'Blog',
        href: '#',
        current: true
    }
];

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <div id="header-wrap">
                    <div className="container clearfix">
                        <div id="primary-menu-trigger"><i className="icon-reorder"/></div>

                        <Logo srcLogoStandard={'images/logo.png'} srcLogoRetina={'images/logo@2x.png'} alt={'Блог'}/>
                        <Menu items={itemsMenu}/>
                    </div>
                </div>
            </header>
        );
    }
}