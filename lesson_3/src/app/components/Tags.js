import React, { Component } from 'react';

import TagsItem from './TagsItem';

export default class Tags extends Component {
    render() {
        let itemsTags = this.props.items.map( ( item, index ) => {
            return (
                <TagsItem name={item.name} href={item.href} key={index}/>
            );
        } );

        return (
            <div className="tagcloud">
                {itemsTags}
            </div>
        );
    }
}