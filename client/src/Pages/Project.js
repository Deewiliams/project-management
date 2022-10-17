import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Project = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log("getting data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ textAlign: "start" }}>
                  <Typography variant="h3">{data.project.name}</Typography>
                  <Typography variant="h5">
                    Description:
                    <br />
                    <span>{data.project.description}</span>
                  </Typography>
                  <Typography variant="h6">{data.project.status}</Typography>
                </div>
                <div>
                  <Button>Back</Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
