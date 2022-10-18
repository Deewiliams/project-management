import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className="loading"  style={{ display: 'flex', justifyContent: 'space-around' }} >
    <CircularProgress style={{fontSize: '50px'}} />
    <Typography variant='h6' >loading...</Typography>
  </div>
  );
};

export default Loading;
