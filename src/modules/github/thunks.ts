import { Dispatch } from "redux"
import { getUserProfile } from "../../api/github"
import createAsyncThunk from "../../lib/createAsyncThunk"
import { getUserProfileAsync } from "./actions"

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);


// dispatch 타입 any 말고 설정하기 위해서
// ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action<any>> 선언은 너무 힘들다
// export function getUserProfileThunk(username: string) {    
//     return async (dispatch: Dispatch) => {
//         const { request, success, failure } = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         } catch (e) {
//             dispatch(failure(e));
//         }
//     }
// }

