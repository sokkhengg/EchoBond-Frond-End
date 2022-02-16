/**
 * Configure the Redux store.
 * @param initialState - The initial state of the store.
 * @returns The configured Redux store.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState={}) 
    {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}