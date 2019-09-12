import React, { Suspense, ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
theme = responsiveFontSizes(theme);

const Title = React.lazy(() => import("./pages/Title"));
const Information = React.lazy(() => import("./pages/Information"));
const Events = React.lazy(() => import("./pages/Events"));
const Contact = React.lazy(() => import("./pages/Contact"));

const MainPage = (): ReactElement => (
  <>
    <Title />
    <Information />
    <Events />
    <Contact />
  </>
);

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/">
        {/* can put a navbar here if desired, and other routes */}
        <Route path="/" exact component={MainPage} />
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
