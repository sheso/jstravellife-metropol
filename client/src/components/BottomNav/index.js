import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SpaIcon from "@material-ui/icons/Spa";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "#b99f5e",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{ maxWidth: "375px" }}
    >
      <Link to="/">
        <BottomNavigationAction
          style={{ color: "black", borderRight: "0.5px #00000038 solid" }}
          label="Home"
          icon={<HomeIcon />}
        />
      </Link>
      <Link to="/services">
        <BottomNavigationAction
          style={{ color: "black", borderRight: "0.5px #00000038 solid" }}
          label="Services"
          icon={<SpaIcon />}
        />
      </Link>
      <Link to="/chat">
        <BottomNavigationAction
          style={{ color: "black", borderRight: "0.5px #00000038 solid" }}
          label="Chat"
          icon={<ChatIcon />}
        />
      </Link>
      <Link to="/profile">
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Profile"
          icon={<AccountBoxIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
