
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { getPostsReducer,  getPostDetailReducer } from './reducers/postReducers';


const reducer = combineReducers({
    getAllPosts: getPostsReducer,
    getIndividualPost: getPostDetailReducer,
});

const middleware = [thunk];



const INITIAL_STATE = {
    getAllPosts:{
        posts:[]
    },
    getIndividualPost:{
        post:{}
    },
    
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;