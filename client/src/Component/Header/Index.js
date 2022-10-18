import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Add from "../add/Index";
import AddProject from "../AddProject/Index";
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <AccountTreeIcon
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </AccountTreeIcon>
          <Typography variant="h6" className={classes.title}>
            Project management app
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', padding: 20 }}>
            <Add />
            <AddProject />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
