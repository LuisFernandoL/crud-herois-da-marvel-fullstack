import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HeroProvider } from "./Provider/HeroContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroProvider>
        <App />
      </HeroProvider>
    </BrowserRouter>
  </React.StrictMode>
);
