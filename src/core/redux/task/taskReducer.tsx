import taskActions from "./taskActions";

const initState = { taskActions: {} };

export default function taskReducer(state=initState, action:any){
    switch (action.type) {
        case taskActions.GET_TASK_DATA_SUCCESS:
            return {
                taskActions: action
            }
        case taskActions.GET_TASK_DATA_ERROR:
            return {
                taskActions: action
            }
        default:
            return state;
    }
}