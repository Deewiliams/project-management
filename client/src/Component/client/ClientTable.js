import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMutation } from '@apollo/client';
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ClientTable({ client }) {
  const classes = useStyles();
  const [deleteClient] = useMutation(DELETE_CLIENTS, {
    variables: {id: client.id},
    refetchQueries: [{query: GET_CLIENTS}]
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
       
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
      </Table>
    </TableContainer>
  );
}
