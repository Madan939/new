export const Taskreducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_TASK':
            return { ...state, taskList: payload.task }
        case 'REMOVE_TASK':
            return { ...state, taskList: payload.task }
        case 'EDIT_TASK':
            return { ...state, Task: payload.task }
        case 'UPDATE':
            return { ...state, taskList: payload.task }
        default:
            return "case does not match"
    }
}
