import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import CompElogo from "./../img/logo-white-small.png";
import BackgroundImage from "./../img/blurred-hardware.jpg";

const useStyles = makeStyles(theme => ({
  page: {
    backgroundImage: `url(${BackgroundImage})`
  },
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  },
  input: {
    display: "none"
  }
}));

const Home: React.FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img src={CompElogo} alt="CompE logo" />
      <h1>Computer Engineering Club</h1>
      <span>Hardware, Software, and everything in between!</span>
      <Button variant="outlined" className={classes.button}>
        Learn More
      </Button>
    </div>
  );
};
export default Home;
