import {
    FETCH_BLOG_DETAIL_PENDING,
    FETCH_BLOG_DETAIL_FULFILLED,
    FETCH_BLOG_DETAIL_REJECTED
} from '../constants/blogConstants';

export function blogDetailsReducer( state = { data: [], isFetching: false }, action ) {
    switch ( action.type ) {
        case FETCH_BLOG_DETAIL_PENDING: {
            state = { ...state, isFetching: true };
            break;
        }

        case FETCH_BLOG_DETAIL_FULFILLED: {
            state = { ...state, isFetching: false, data: action.payload.data };
            break;
        }

        case FETCH_BLOG_DETAIL_REJECTED: {
            state = { ...state, isFetching: false, errorMessage: action.payload.message };
            break;
        }
    }

    return state;
}