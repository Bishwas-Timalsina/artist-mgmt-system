import React from 'react'
import { useParams } from 'react-router-dom'

const SongPage = () => {
  const{id}  = useParams()

  return (
    <>
    <div>{id}</div>
    </>
  )
}

export default SongPage