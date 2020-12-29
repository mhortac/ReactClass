import React from "react";

import { useSelector } from "react-redux";

import Icon from "@material-ui/core/Icon";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import FiscaliaLogo from "assets/logos/fiscalia-logo.png";

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

export default function Header(params) {
  const classes = useStyles();
  const { contacts } = useSelector((state) => state);

  return (
    <div className="layout-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Icon> menu </Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src={FiscaliaLogo} alt="fiscalia-logo" />
          </Typography>
          <Button color="inherit"> {contacts} </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
