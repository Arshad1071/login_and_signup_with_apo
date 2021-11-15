import { applyMiddleware, createStore  } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/routeReducer.js";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';






const middleware = composeWithDevTools(applyMiddleware(thunk,createLogger()));

export default createStore(
  rootReducer,
  middleware,
);


