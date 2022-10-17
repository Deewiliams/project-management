import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const ClientProjectInfo = ({ client }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <div style={{alignItems: "start"}}>
     <h3>Client information</h3>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{client.name}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
              <MailOutlineIcon />
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{client.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{client.phone}</Typography>
          </Grid>
        </Grid>
      </Paper>
     </div>
    </div>
  );
};

export default ClientProjectInfo;
