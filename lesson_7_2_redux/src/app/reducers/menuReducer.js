import * as Menu from '../constants/menuConstants';

export function menuReducer( state = { menu: [], isFetching: false }, action ) {
    switch ( action.type ) {
        case Menu.FETCH_MENU_PENDING: {
            state = { ...state, isFetching: true };
            break;
        }

        case Menu.FETCH_MENU_FULFILLED: {
            state = { ...state, isFetching: false, menu: action.payload.data }
            break;
        }

        case Menu.FETCH_MENU_REJECTED: {
            state = { ...state, isFetching: false, errorMessage: action.payload.message };
            break;
        }
    }

    return state;
}