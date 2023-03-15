import { combineReducers, legacy_createStore as createStore, } from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import  usersReducer from './users-reducer';

let reducers = combineReducers ({
    dialogPage:dialogReducer,
    profilePage:profileReducer,
    usersPage:usersReducer

});

let store = createStore(reducers)



window.store = store;
export default store;