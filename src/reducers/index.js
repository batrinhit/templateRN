import { combineReducers } from 'redux';
import { auth} from './reducers';
import nav from './Navigation';
const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
