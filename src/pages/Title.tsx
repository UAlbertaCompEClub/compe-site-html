import React, { ReactElement } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CompElogo from "./../img/logo-white-small.png";
import BackgroundImage from "./../img/engg_carnival_2019.jpg";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute"
  },
  button: {
    margin: theme.spacing(1),
    textTransform: "none",
    textAlign: "center"
  },
  title: {
    color: "white",
    textAlign: "center"
  },
  subtitle: {
    color: "white",
    padding: 20,
    textAlign: "center"
  }
}));

const Title: React.FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.page} style={{ textAlign: "center" }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <img src={CompElogo} alt="CompE logo" style={{ padding: 20 }} />
          </Grid>

          <Grid item>
            <Typography
              variant="h1"
              color="inherit"
              className={classes.title}
            >
              Computer Engineering Club
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Paper style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          color="inherit"
          className={classes.subtitle}
        >
          Hardware, Software, and everything in between!
        </Typography>
        <Button variant="outlined" className={classes.button}>
          We're working on this site, we promise. Coming soon™️
        </Button>
      </Paper>
    </div>
  );
};
export default Title;
