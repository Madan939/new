import React, { useEffect, useState } from 'react'
import { useTask } from './context/CardContext'
import Showtask from './Showtask'

const Addtask = () => {
    const { addtask, taskList, Task, updatetask } = useTask()
    // console.log(Task)
    const [task, setTask] = useState('')
    useEffect(() => {
        if (Task && Task.id) {
            setTask(Task.task)
            // console.log(Task)
        }
    }, [Task])
    function handlesubmit(e) {
        e.preventDefault()
        if (Task.id) {
            updatetask(Task.id, { ...Task, task: task })
            setTask("")
        }
        else {
            if (task.trim() === '') return
            const newtask = {
                id: Date.now(),
                task: task
            }
            addtask(newtask)
            setTask("")
        }
    }
    // console.log(taskList)

    return (
        <>
            <form className='mt-5' onSubmit={handlesubmit}>
                <div className='d-flex justify-content-center mb-4 w-50 m-auto'>
                    <input type='text' className='form-control' onChange={(e) => setTask(e.target.value)} value={task} />
                    {Task.id ? (<button type='submit' className='btn btn-success m-1'>Update</button>) : (<button type='submit' className='btn btn-primary m-1'>Add</button>)}
                </div>
            </form>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th className='text-center'>SN</th>
                        <th className='text-center'>Task</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task, idx) => (
                        <Showtask key={task.id} task={task} idx={idx} />
                    ))}
                </tbody>

            </table>

        </>
    )
}

export default Addtask