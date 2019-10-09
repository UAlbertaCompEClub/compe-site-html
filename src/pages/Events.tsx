import React, { ReactElement } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  }
}));

const Events: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div id="events">
      <h2>Upcoming Events</h2>
    </div>
  );
};
export default Events;
