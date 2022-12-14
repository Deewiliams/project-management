import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import ClientProjectInfo from "./ClientProjectInfo";
import DeleteProject from "../Component/DeleteProject";
import EditProject from "../Component/EditProject";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loading from "../Component/Loading";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  if (loading) return <Loading />;
  if (error) return <p>Error </p>;

  return (
    <div className={classes.root}>
      <Container style={{ marginTop: 100 }}>
        <Typography variant="h4">Project Information</Typography>
        <br />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <div>
                  <Typography variant="h3">{data.project.name}</Typography>
                  <br />
                  <Typography
                    variant="h5"
                    style={{ textAlign: "justify", fontSize: 15 }}
                  >
                    <span style={{ color: "black" }}>Description:</span>
                    <br />
                    <span>{data.project.description}</span>
                  </Typography>
                  <br />
                  <Typography
                    variant="h5"
                    style={{ textAlign: "start", fontSize: 15 }}
                  >
                    Status:{" "}
                    <span style={{ color: "black" }}>
                      {data.project.status}
                    </span>
                  </Typography>
                  <br />
                  <Grid>
                    <Link to="/">
                      <Button variant="contained" color="primary" fullWidth>
                        <ArrowBackIcon />
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <ClientProjectInfo client={data.project.client} />
                <DeleteProject projectId={data.project.id} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <EditProject project={data.project} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Project;
