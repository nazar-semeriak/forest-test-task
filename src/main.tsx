import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import App from "./App.tsx";
import MainPage from "./pages/main-page.tsx";
import SignIn from "./pages/sign-up.tsx";
import Auth from "./pages/auth.tsx";
import Login from "./pages/login.tsx";
import OrdersPage from "./pages/orders.tsx";
import OrderPage from "./pages/order.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignIn />} />
          </Route>
          <Route path="/orders">
            <Route index element={<OrdersPage />} />
            <Route path=":orderId" element={<OrderPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
