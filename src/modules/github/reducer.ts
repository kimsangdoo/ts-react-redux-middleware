import { createReducer } from "typesafe-actions";
import { getUserProfileAsync } from ".";
import { asyncState, createAsyncReducer, transformToArray } from "../../lib/reducerUtils";
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from "./actions";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
    userProfile: asyncState.initial()
    // userProfile: {
    //     loading: false,
    //     error: null,
    //     data: null
    // }
};

const github = createReducer<GithubState, GithubAction>(initialState)
.handleAction(transformToArray(getUserProfileAsync), createAsyncReducer(getUserProfileAsync, 'userProfile'));
    // .handleAction(
    //     [
    //         getUserProfileAsync.request,
    //         getUserProfileAsync.success,
    //         getUserProfileAsync.failure
    //     ], createAsyncReducer(getUserProfileAsync, 'userProfile'));
    

/*
const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: (state) => ({
        ...state,
        userProfile: asyncState.load()
        // userProfile: {
        //     loading: true,
        //     error: null,
        //     data: null
        // }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: asyncState.success(action.payload)
        // userProfile: {
        //     loading: false,
        //     error: null,
        //     data: action.payload
        // }
    }),    
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: asyncState.error(action.payload)
        // userProfile: {
        //     loading: false,
        //     error: action.payload,
        //     data: null
        // }
    })    
});
*/

export default github;