import React from 'react'
import { useQuery,gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
        clients{
          id
          name
          email
          phone
        }
  }
`;


const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);
    console.log(data);  
  return (
    <div>
        <h1>Clients</h1>
    </div>
  )
}

export default Clients