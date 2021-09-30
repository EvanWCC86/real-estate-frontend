import * as actionTypes from "../constants/postConstant";
import axios from "axios";


export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POSTS_REQUEST});
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/posts`);
        

        dispatch({
            type:actionTypes.GET_POSTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
            payload:error
        })
    }
}

export const getPostDetail = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POST_DETAILS_REQUEST});
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/posts/${id}`);
        
        dispatch({
            type:actionTypes.GET_POST_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POST_DETAILS_FAIL,
            payload:error
        })
    }
}