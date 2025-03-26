import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import App from "./App.tsx";
import MainPage from "./pages/main-page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
