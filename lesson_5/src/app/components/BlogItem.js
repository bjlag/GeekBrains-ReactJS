import React, { Component } from 'react';

import TagsItem from './TagsItem';
import Slider from './Slider';

const itemsBlog = [
    {
        id: 1,
        title: 'This is a Standard post with a Preview Image',
        date: '10th Feb 2017',
        user: 'admin',
        comments: 13,
        href: '#',
        tags: [
            {
                name: 'general',
                href: '#'
            },
            {
                name: 'videos',
                href: '#'
            }
        ],
        media: [
            {
                src: '/images/17.jpg',
                alt: 'Standard Post with Image',
                type: 'img'
            }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae voluptatem libero at eveniet veritatis ab facere.'
    },
    {
        id: 2,
        title: 'This is a Standard post with an Embedded Video',
        date: '16th Feb 2017',
        user: 'admin',
        comments: 19,
        href: '#',
        tags: [
            {
                name: 'video',
                href: '#'
            }
        ],
        media: [
            {
                src: 'http://player.vimeo.com/video/87701971',
                alt: 'Standard Post with Video',
                type: 'video'
            }
        ],
        text: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis placeat quo unde reprehenderit eum facilis vitae.'
    },
    {
        id: 3,
        title: 'This is a Standard post with a Slider Gallery',
        date: '24th Feb 2017',
        user: 'admin',
        comments: 21,
        href: '#',
        tags: [
            {
                name: 'media',
                href: '#'
            },
            {
                name: 'gallery',
                href: '#'
            }
        ],
        media: [
            {
                src: '/images/10.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            },
            {
                src: '/images/20.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            },
            {
                src: '/images/21.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci.'
    }
];

export default class BlogItem extends Component {
    render() {

        let items = itemsBlog.map( ( item, index ) => {
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
                    media = <iframe src={item.media[0].src} width="500" height="281" allowFullScreen={true}/>
                }
            } else if ( item.media.length > 1 ) {
                media = <Slider item={item.media}/>;
            }


            return (
                <div className="entry clearfix" key={item.id}>
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
                {items}
            </div>
        );
    }
}