import React, { Component } from 'react';

export default class Menu extends Component {
    constructor() {
        super( ...arguments );
        this.state = {
            items: this.props.items
        };

        this.onClickItemMenu = this.onClickItemMenu.bind( this );
    }

    onClickItemMenu( currentItemIndex ) {
        let currentItems = this.state.items.map( ( item, index ) => {
            item.current = index === currentItemIndex;
        } );

        this.setState( {
            currentItems
        } );
    }

    render() {
        let itemsMenu = this.state.items.map( ( item, index ) => {
            return (
                <li className={item.current ? 'current' : ''} key={index}>
                    <a href={item.href} onClick={this.onClickItemMenu.bind( this, index )}>
                        {item.name}
                    </a>
                </li>
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