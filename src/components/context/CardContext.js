import { createContext, useContext, useReducer } from "react"
import { Taskreducer } from "../reducer/cardReducer"

const initialstate = {
    taskList: [],
    Task: {}
}
const Taskcontext = createContext(initialstate)
export const Taskprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Taskreducer, initialstate)
    const addtask = (task) => {
        const updatedtask = state.taskList.concat(task)
        dispatch({
            type: "ADD_TASK",
            payload: {
                task: updatedtask
            }
        })
    }
    const removetask = (task) => {
        // console.log(task)
        const updatedtask = state.taskList.filter(remove => remove.id !== task.id)
        dispatch({
            type: "REMOVE_TASK",
            payload: {
                task: updatedtask
            }
        })
    }
    const edittask = (id) => {
        const updatedtask = state.taskList.find(current => current.id === id)
        //console.log(updatedtask)
        dispatch({
            type: "EDIT_TASK",
            payload: {
                task: updatedtask
            }
        })
    }
    const updatetask = (id, task) => {
        const updatedtask = state.taskList.map((item) => (
            item.id === id ? { id: task.id, task: task.task } : item
        ))
        dispatch({
            type: "UPDATE",
            payload: {
                task: updatedtask
            }
        })
    }
    const value = {
        taskList: state.taskList,
        addtask,
        removetask,
        edittask,
        updatetask
    }
    return (
        <Taskcontext.Provider value={value}>
            {children}
        </Taskcontext.Provider>
    )
}
export const useTask = () => {
    const context = useContext(Taskcontext)
    return context
}