import { middleware } from './src/navigators/AppNavigator';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers';
export const store = createStore(AppReducer, applyMiddleware(middleware));