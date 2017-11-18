import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Main extends Component {
    render() {

        return (
            <div id="wrapper" className="clearfix">
                <Header>
                    <Logo srcLogoStandard={'/images/logo.png'} srcLogoRetina={'/images/logo@2x.png'} alt={'Блог'}/>
                    <Menu>
                        <MenuItem href="/">Блог</MenuItem>
                        <MenuItem href="/blog-error/">Блог с ошибкой</MenuItem>
                        <MenuItem href="/portfolio/">Портфолио</MenuItem>
                    </Menu>
                </Header>


                { this.props.children }

                <Footer/>
            </div>
        );
    }
}