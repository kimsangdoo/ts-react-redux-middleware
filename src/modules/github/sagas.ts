import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
//     try {
//         const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//         yield put(getUserProfileAsync.success(userProfile));
//     } catch (e) {
//         yield put(getUserProfileAsync.failure(e));
//     }
// }

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}