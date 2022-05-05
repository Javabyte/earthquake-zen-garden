import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./global.css.js";
import Layout from "./template/Layout.jsx";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
