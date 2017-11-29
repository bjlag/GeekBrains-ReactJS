import {
    FETCH_BLOG_PENDING,
    FETCH_BLOG_FULFILLED,
    FETCH_BLOG_REJECTED
} from '../constants/blogConstants';

export function blogReducer( state = { items: [], isFetching: false }, action ) {
    switch ( action.type ) {
        case FETCH_BLOG_PENDING: {
            state = { ...state, isFetching: true };
            break;
        }

        case FETCH_BLOG_FULFILLED: {
            state = { ...state, isFetching: false, items: action.payload.data };
            break;
        }

        case FETCH_BLOG_REJECTED: {
            state = { ...state, isFetching: false, errorMessage: action.payload.message };
            break;
        }
    }

    return state;
}