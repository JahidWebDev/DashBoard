import React from 'react'
import { useParams } from 'react-router'

const UpdateCategory = () => {
    const {id} = useParams()
  return (
    <div>UpdateCategory:{id}
    <input type="text" defaultValue={id} className='ml-2 border-1 w-[700px]' />
    </div>
  )
}

export default UpdateCategory