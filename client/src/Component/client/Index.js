import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../../queries/clientQueries';
import ClientTable from './ClientTable';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
        <>
        <ClientTable data={data} />
        </>
  )
}

export default Clients

