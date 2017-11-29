import axios from 'axios';

export function fetchBlogItems() {
    return {
        type: 'FETCH_BLOG',
        payload: axios.get( 'https://jsonplaceholder.typicode.com/posts' )
    };
}

// export function fetchBlogDetail( id ) {
//     dispatcher.dispatch( {
//         type: FETCH_BLOG_DETAIL_START,
//         payload: id
//     } );
// }