import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENTS } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);




export default function ClientTable({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENTS, {
    variables: { id: client.id },
    // refetchQueries: [{query: GET_CLIENTS}]
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    <TableBody>
      <StyledTableCell align="left">{client.name}</StyledTableCell>
      <StyledTableCell align="left">{client.email}</StyledTableCell>
      <StyledTableCell align="left">{client.phone}</StyledTableCell>
      <StyledTableCell align="left">
        <Button variant="contained" color="primary" onClick={deleteClient}>
          <DeleteIcon />
        </Button>
      </StyledTableCell>
    </TableBody>
  );
}
