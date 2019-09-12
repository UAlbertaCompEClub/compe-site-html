import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
theme = responsiveFontSizes(theme);

const Home = React.lazy(() => import("./pages/Home"));
const Information = React.lazy(() => import("./pages/Information"));
const Announcements = React.lazy(() => import("./pages/Announcements"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const routes = [
  {
    route: "/",
    component: Home
  },
  {
    route: "/information",
    component: Information
  },
  {
    route: "/announcements",
    component: Announcements
  },
  {
    route: "/about",
    component: About
  },
  { route: "/contact", component: Contact }
];

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {routes.map(r => (
            <Route path={r.route} exact component={r.component} key={r.route} />
          ))}
        </Switch>
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
