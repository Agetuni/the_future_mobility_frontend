import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user_reducer';
import { vehicalReducer } from './vehical_reducer';
import { reserveReducer } from './resevation_reducer';
const rootReducer = combineReducers({
  // Reducers
  reservation: reserveReducer,
  vehical: vehicalReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
