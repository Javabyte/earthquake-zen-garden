import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//pages
const LazyHome = lazy(() => import("../pages/Home.jsx"));
const LazyDetails = lazy(() => import("../pages/Details.jsx"));
const LazyProfile = lazy(() => import("../pages/Profile.jsx"));

/* 
  Firstly, thank you for taking the time to go through my code, hopefully it is easy to follow! I have documented notes in pages and components!

  Currently using suspense to wat until routes are ready to render. Could be used on a per component basis on each page showing
  a spinner for loading component(s) for non blocking renders. I am currently just rendering lading text :(

  A catch all route has been added at the end in case there is no existing Route!
*/

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="earthquakes/:id" element={<LazyDetails />} />
          <Route path="profile" element={<LazyProfile />} />
          <Route
            path="*"
            element={
              <main>
                <h3>Oops, This may not be the route you're looking for!</h3>
              </main>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
