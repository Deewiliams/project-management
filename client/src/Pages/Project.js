import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'

const Project = () => {
  const {id} = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT,{
    variables:{id}});
    console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <div>Project</div>
  )
}

export default Project