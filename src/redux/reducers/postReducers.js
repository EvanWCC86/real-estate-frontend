import * as actionTypes from '../constants/postConstant';

export const getPostsReducer = (state={posts:[]}, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            return {
                loading:true,
                posts:[],
            };
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                loading:false,
                posts:action.payload,
            };
        case actionTypes.GET_POSTS_FAIL:
            return {
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const getPostDetailReducer = (state = {post:{} }, action) => {
    switch (action.type) {
        case actionTypes.GET_POST_DETAILS_REQUEST:
            return {
                loading:true,
                post: {},
            };
        case actionTypes.GET_POST_DETAILS_SUCCESS:
            return {
                loading:false,
                post: action.payload,
            };
        case actionTypes.GET_POST_DETAILS_FAIL:
            return {
                loading:false,
                error: action.payload,
            };

        default:
            return state;
    }
}