import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../../queries/projectQueries'

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECT);
  console.log('projects',data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 
  return (
    <div>Project</div>
  )
}

export default Project