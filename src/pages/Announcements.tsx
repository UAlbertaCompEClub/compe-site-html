import React, { ReactElement } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  }
}));

const Announcements: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div id="announcements">
      <div>#todo create an easy way for other people to make posts here</div>
      <Button variant="outlined" className={classes.button}>
        Learn More
      </Button>
    </div>
  );
};
export default Announcements;
