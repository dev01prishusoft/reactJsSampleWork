import { all } from "redux-saga/effects";
import TaskSagas from "./redux/task/taskSaga";

export default function* rootSaga() {
    yield all([TaskSagas()]);
}