import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { surveyReducerPage1, surveyReducerPage2 } from './reducers/surveyReducer';

 const reducer = combineReducers({
    page1: surveyReducerPage1,
    page2: surveyReducerPage2
 })



const middleware = [thunk];

const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof reducer>

export default store;