import React, { ReactElement } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  }
}));

const About: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div id="about">
      <h1>About Us</h1>
      <span>
        Welcome to the Computer Engineering club! Our group is a fantastic way
        to network with other engineering students and to hang out with some
        terrific and terrifying people. Click the link below eoo see the list of
        all the formal executives with the Computer Engineering club. However,
        there are many more contributing members.
      </span>
      <Button variant="outlined" className={classes.button}>
        Learn More
      </Button>
    </div>
  );
};
export default About;
