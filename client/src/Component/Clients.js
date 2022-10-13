import React from 'react'
import { useQuery, gql } from '@apollo/client';

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.clients.map((c) => (
        <>
        <h6>{c.name}</h6>
        </>
      ))}
    </div>
  )
}

export default Clients

