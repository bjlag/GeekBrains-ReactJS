import React, { Component } from 'react';

import BlogItem from './BlogItem';
import Pagination from './Pagination';

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
                src: 'images/17.jpg',
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
                src: 'images/10.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            },
            {
                src: 'images/20.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            },
            {
                src: 'images/21.jpg',
                alt: 'Standard Post with Gallery',
                type: 'img'
            }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci.'
    }
];

export default class Blog extends Component {
    render() {
        return (
            <div className="postcontent nobottommargin clearfix">
                <BlogItem items={itemsBlog}/>
                <Pagination/>
            </div>
        );
    }
}