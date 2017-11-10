import React, { Component } from 'react';

import TagsItem from './TagsItem';
import Slider from './Slider';

export default class BlogItem extends Component {
    render() {

        let itemsBlog = this.props.items.map( ( item, index ) => {
            const textReadMore = 'Read More';

            let tags = item.tags.map( ( item, index ) => {
                return (
                    <TagsItem name={item.name} href={item.href} key={index}/>
                );
            } );

            let media;
            if ( item.media.length === 1 ) {
                if ( item.media[0].type === 'img' ) {
                    media = <img className="image_fade" src={item.media[0].src} alt={item.media[0].alt}/>
                } else if ( item.media[0].type === 'video' ) {
                    media = <iframe src={item.media[0].src} width="500" height="281"/>
                }
            } else if ( item.media.length > 1 ) {
                media = <Slider item={item.media}/>;
            }


            return (
                <div className="entry clearfix" key={index}>
                    <div className="entry-image">
                        {media}
                    </div>
                    <div className="entry-c">
                        <div className="entry-title">
                            <h2><a href={item.href}>{item.title}</a></h2>
                        </div>
                        <ul className="entry-meta clearfix">
                            <li><i className="icon-calendar3"/> {item.date}</li>
                            <li><a href="#"><i className="icon-user"/> {item.user}</a></li>
                            <li><i className="icon-folder-open"/> {tags}</li>
                            <li><a href="#"><i className="icon-comments"/> {item.comments}</a></li>
                            <li><a href="#"><i className="icon-camera-retro"/></a></li>
                        </ul>
                        <div className="entry-content">
                            <p>{item.text}</p>
                            <a href="#" className="more-link">{textReadMore}</a>
                        </div>
                    </div>
                </div>
            );
        } );

        return (
            <div id="posts" className="small-thumbs">
                {itemsBlog}
            </div>
        );
    }
}