import { combineReducers } from 'redux';
import UserAuthReducer from './Auth/AuthReducer'
import PostReducer from './Auth/PostReducer'
const RootReducer = combineReducers({
    userAuth: UserAuthReducer,
    userPosts: PostReducer,
});

export default RootReducer;