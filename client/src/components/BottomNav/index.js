import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import Link from "@material-ui/core/Link";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SpaIcon from "@material-ui/icons/Spa";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    backgroundColor: "#b99f5e",
    display: "flex",
    justifyContent: "space-around",
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
      style={{ maxWidth: "100vw" }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        <BottomNavigationAction
          style={{
            color: "black",
            borderRight: "0.5px #00000038 solid",
          }}
          label="Home"
          icon={<HomeIcon />}
        />
      </Link>
      <Link
        href="/services"
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        <BottomNavigationAction
          style={{ color: "black", borderRight: "0.5px #00000038 solid" }}
          label="Services"
          icon={<SpaIcon />}
        />
      </Link>
      <Link
        href="/chat"
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        <BottomNavigationAction
          style={{ color: "black", borderRight: "0.5px #00000038 solid" }}
          label="Chat"
          icon={<ChatIcon />}
        />
      </Link>
      <Link
        href="/profile"
        label="Profile"
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Profile"
          icon={<AccountBoxIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
