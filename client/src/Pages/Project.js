import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Container, Typography } from "@material-ui/core";
import ClientProjectInfo from "./ClientProjectInfo";
import DeleteProject from "../Component/DeleteProject";

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
        <Grid container spacing={3} style={{margin: 'auto'}}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <Typography variant="h3">{data.project.name}</Typography>
                  <Typography variant="h5">
                    Description:
                    <br />
                    <span>{data.project.description}</span>
                  </Typography>
                  <Typography variant="h6">{data.project.status}</Typography>
                </div>
                <div>
                  <Link to="/">
                    <Button>Back</Button>
                  </Link>
                </div>
              </div>
              <div>
                <ClientProjectInfo client={data.project.client} />
                <DeleteProject projectId={data.project.id} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
