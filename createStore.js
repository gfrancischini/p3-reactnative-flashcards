
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {deckReducer} from './reducers'


const reducers = combineReducers({
    deckReducer
})

export const store = createStore(reducers,
    applyMiddleware(thunk));

