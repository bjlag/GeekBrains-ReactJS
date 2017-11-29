import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// подключаем редюсеры
import { menuReducer } from '../reducers/menuReducer';
import { usersReducer } from '../reducers/usersReducer';
import { blogReducer } from '../reducers/blogReducer';
import { blogDetailsReducer } from '../reducers/blogDetailsReducer';

// константа для промежуточного софта
const middleware = applyMiddleware( promise(), logger() );

// комбинируем редюсеры
const reducers = combineReducers( {
    menu: menuReducer,
    users: usersReducer,
    blogItems: blogReducer,
    blogDetails: blogDetailsReducer
} );

// создаем стор
const store = createStore( reducers, middleware );
export default store;