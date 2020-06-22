import { combineReducers } from 'redux';
import UserAuthReducer from './Auth/AuthReducer'
const RootReducer = combineReducers({
    userAuth: UserAuthReducer,
});

export default RootReducer;