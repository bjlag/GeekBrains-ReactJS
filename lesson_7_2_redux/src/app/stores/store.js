import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// подключаем редюсеры
import { usersReducer } from '../reducers/usersReducer';

// константа для промежуточного софта
const middleware = applyMiddleware( promise(), logger() );

// комбинируем редюсеры
const reducers = combineReducers( {
    users: usersReducer,
    // comment: commentReducer // подключаем дополнительные редусеры здесь
} );

// создаем стор
const store = createStore( reducers, middleware );
export default store;