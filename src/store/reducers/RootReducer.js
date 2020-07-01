import { combineReducers } from 'redux';
import UserAuthReducer from './Auth/AuthReducer'
import PostReducer from './Auth/PostReducer'
import ProfileReducer from './Auth/ProfileReducer'
const RootReducer = combineReducers({
    userAuth: UserAuthReducer,
    userPosts: PostReducer,
    userProfile: ProfileReducer,
});

export default RootReducer;