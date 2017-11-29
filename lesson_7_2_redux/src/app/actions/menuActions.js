import axios from 'axios';

export function fetchMenu() {
    return {
        type: 'FETCH_MENU',
        payload: axios.get( './data/menu.json' )
    };
}