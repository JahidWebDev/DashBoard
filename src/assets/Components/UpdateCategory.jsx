import React from 'react'
import { useParams } from 'react-router'

const UpdateCategory = () => {
    const {id} = useParams()
  return (
    <div>UpdateCategory{id}</div>
  )
}

export default UpdateCategory