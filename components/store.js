import {createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AnimationReducer from "../tailwind/animation/animation.reducer";

const middlewears = applyMiddleware(logger,thunk);  //define middleware, passig as arguments;

const root = combineReducers({
    //all reducers collection
    AnimationReducer
});

//store creation
const store =   createStore(root,{},middlewears);

export default store;

