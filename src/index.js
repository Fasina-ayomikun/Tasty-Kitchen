import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { client_id, domain } from "./keys";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={client_id}
    redirectUri={window.location.origin}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Auth0Provider>
);
