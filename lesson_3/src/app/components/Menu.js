import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        let itemsMenu = this.props.items.map( ( item, index ) => {
            let currentClass = ( item.current ? 'current' : '' );
            return (
                <li className={currentClass} key={index}><a href={item.href}>{item.name}</a></li>
            );
        } );

        return (
            <nav id="primary-menu">
                <ul>
                    {itemsMenu}
                </ul>
            </nav>
        );
    }
}