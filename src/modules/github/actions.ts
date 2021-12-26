import { createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AxiosError } from 'axios';

// 액션 타입 선언
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// 액션 생성 함수
// 제너릭 : 각 액션들의 payload에 대한 타입
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();

