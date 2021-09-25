import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";
import {} from "redux-devtools-extension/developmentOnly";

const reducers = combineReducers({
  //cartReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
