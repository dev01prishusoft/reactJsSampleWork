import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import taskActions from "./taskActions";
import { getTasks } from "./taskService";

interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:any,
    statusText?:any,
}

export function* getAllTaskDataSaga() {
    yield takeEvery(taskActions.GET_TASK_DATA, function*(){
        try {
            const data:ResponseGenerator = yield call(getTasks);
            if(data){
                yield put({
                    type: taskActions.GET_TASK_DATA_SUCCESS,
                    data: data
                })
            }
        } catch(error){
            yield put({
                type: taskActions.GET_TASK_DATA_ERROR,
                status: false,
                message: "Something went wrong"
            })
        }
    })
}

export default function* rootSaga() {
    yield all([
        fork(getAllTaskDataSaga)
    ])
}
