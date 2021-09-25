import tunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import { Reducer } from "../Reducer";

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(tunk)));

export default Store;