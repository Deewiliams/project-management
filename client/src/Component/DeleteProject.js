import React from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'

const DeleteProject = ({projectId}) => {
    const navigate = useNavigate()

    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables: {id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{query: GET_PROJECTS}]
    })
  return (
    <div>
        <Button onClick={deleteProject} >Delete</Button>
    </div>
  )
}

export default DeleteProject