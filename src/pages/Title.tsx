import React, { ReactElement } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CompElogo from "./../img/logo-white-small.png";
import BackgroundImage from "./../img/blurred-hardware.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  },
  title: {
    color: "white"
  }
}));

const Title: React.FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.page}>
      <img src={CompElogo} alt="CompE logo" />
      <Typography
        variant="h1"
        gutterBottom
        color="inherit"
        className={classes.title}
      >
        Computer Engineering Club
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        color="inherit"
        className={classes.title}
      >
        Hardware, Software, and everything in between!
      </Typography>
      <Button variant="outlined" className={classes.button}>
        Learn More
      </Button>
    </div>
  );
};
export default Title;
