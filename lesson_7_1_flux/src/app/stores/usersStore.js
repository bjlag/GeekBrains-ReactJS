import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';

import {
    FETCH_USERS_START,
    FETCH_USERS_END
} from '../constants/usersConstatnts';

class UsersStore extends EventEmitter {
    constructor() {
        super( ...arguments );
    }

    fetchUsersStart() {
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( ( response ) => {
                const { data } = response;
                dispatcher.dispatch( {

                } );
            } );
    }

    change() {
        this.emit( 'change', { users: {} } )
    }

    handleActions( action ) {
        switch ( action.type ) {
            case FETCH_USERS_START: {

                break;
            }
        }
    }
}

const usersStore = new UsersStore();
dispatcher.register( usersStore.handleActions );
export default usersStore;