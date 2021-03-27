import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial } from "@material-ui/lab";
import { SpeedDialAction } from "@material-ui/lab";
import LanguageIcon from "@material-ui/icons/Language";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/actions/translateAction";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    background: "none",
  },
  exampleWrapper: {
    // position: 'relative',
    position: "absolute",
    marginTop: theme.spacing(-3),
    height: 50,
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(1),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(0),
      right: theme.spacing(-1),
    },
  },
}));

const actions = [
  { icon: "EN", name: "english" },
  { icon: "RU", name: "russian" },
];

export default function SpeedDials() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const storeLang = useSelector((store) => store.translate);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLang = () => {
    if (storeLang === true) {
      dispatch(changeLang(false));
    } else dispatch(changeLang(true));
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className={classes.root}
      style={{
        width: 40,
        height: 40,
        marginTop: 20,
        zIndex: 1,
        position: "absolute",
        right: "0px",
      }}
    >
      <div
        className={classes.exampleWrapper}
        style={{
          position: "fixed",
          top: "50%",
          right: "0px",
          width: "50px",
          height: "50px",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={false}
          icon={<LanguageIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="left"
        >
          <SpeedDialAction
            key={storeLang ? actions[1].name : actions[0].name}
            icon={storeLang ? actions[1].icon : actions[0].icon}
            tooltipTitle={storeLang ? actions[1].name : actions[0].name}
            onClick={handleChangeLang}
            style={{ backgroundColor: "black" }}
          />
        </SpeedDial>
      </div>
    </div>
  );
}
