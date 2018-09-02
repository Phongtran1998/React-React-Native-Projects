import {combineReducers} from 'redux';
import auth from './AuthReducer'
import search from './jobs_reducer';
import like from './like_reducer'

export default combineReducers({
    auth,
    search,
    like
})