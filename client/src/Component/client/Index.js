import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../../queries/clientQueries";
import ClientTable from "./ClientTable";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Clients = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell align="left">Full names</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">phone</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {data.clients.map((client, index) => (
            <ClientTable client={client} index={index} key={client.id} />
          ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default Clients;
