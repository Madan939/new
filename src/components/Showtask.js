import React from 'react'
import { useTask } from './context/CardContext'

const Showtask = ({ task, idx }) => {
  const { removetask, edittask } = useTask()
  return (
    <>
      <tr>
        <td className='text-center'>{idx + 1}</td>
        <td className='text-center'>{task.task}</td>
        <td className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-success m-1 text-light' onClick={() => edittask(task.id)}>Edit</button>
          <button className='btn btn-danger m-1 text-light' onClick={() => removetask(task)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default Showtask