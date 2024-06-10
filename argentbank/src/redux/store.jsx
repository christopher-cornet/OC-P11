import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
})

const store = configureStore({
  reducer: reducers
})


export default store;