import axios from 'axios';

export function fetchBlogItems() {
    return {
        type: 'FETCH_BLOG',
        payload: axios.get( 'https://jsonplaceholder.typicode.com/posts' )
    };
}