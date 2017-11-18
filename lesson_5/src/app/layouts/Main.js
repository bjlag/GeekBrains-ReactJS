import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Main extends Component {
    constructor() {
        super( ...arguments );

        this.options = {
            logo: {
                standard: '/images/logo.png',
                retina: '/images/logo@2x.png',
                alt: 'Блог'
            },

            menu: [
                {
                    name: 'Блог',
                    href: '/'
                },
                {
                    name: 'Блог с ошибкой',
                    href: '/blog-error/'
                },
                {
                    name: 'Портфолио',
                    href: '/portfolio/'
                }
            ]
        };

        this.menuItems = this.options.menu.map( ( item, index ) => {
            return (
                <MenuItem href={ item.href } key={ index }>{ item.name }</MenuItem>
            );
        } );


    }

    render() {
        return (
            <div id="wrapper" className="clearfix">
                <Header>
                    <Logo srcLogoStandard={ this.options.logo.standard }
                          srcLogoRetina={ this.options.logo.retina } alt={ this.options.logo.alt }/>
                    <Menu>
                        { this.menuItems }
                    </Menu>
                </Header>


                { this.props.children }

                <Footer/>
            </div>
        );
    }
}