const taskActions = {
    GET_TASK_DATA: "GET_TASK_DATA",
    GET_TASK_DATA_SUCCESS: "GET_TASK_DATA_SUCCESS",
    GET_TASK_DATA_ERROR: "GET_TASK_DATA_ERROR",

    getAllTaskData : () => ({
        type: taskActions.GET_TASK_DATA
    })
}
export default taskActions;