import axios from 'axios';

export function fetchBlogDetails( id ) {
    return {
        type: 'FETCH_BLOG_DETAIL',
        payload: axios.get( `https://jsonplaceholder.typicode.com/posts/${ id }` )
    };
}