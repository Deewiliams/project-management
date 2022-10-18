import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";
import ProjectCard from "./ProjectCard";

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

  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log("projects", data);

  if (loading) return null;
  if (error) return <p>Error :(</p>;

  return (
    <div className={classes.root}>
      {data.projects.length > 0 ? (
        <Grid container spacing={3}>
          {data.projects.map((project) => (
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <ProjectCard project={project} key={project.id} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>There are no projects</>
      )}
      <br />
      <hr />
    </div>
  );
};

export default Project;
