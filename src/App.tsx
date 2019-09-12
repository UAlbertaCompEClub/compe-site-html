import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Information = React.lazy(() => import("./pages/Information"));
const Announcements = React.lazy(() => import("./pages/Announcements"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App: React.FC = () => (
  <>
    <Suspense fallback={() => <div>Loading...</div>}>
      <Home />
      <Information />
      <Announcements />
      <About />
      <Contact />
    </Suspense>
  </>
);

export default App;
