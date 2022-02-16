import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postReducer from './postReducer'

/**
 * Combines all of the reducers into one reducer.  This is the reducer that is used by the store. 
 */
export default combineReducers({
    loginReducer,
    postReducer
})