import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import AdminDashboard from "./admin/Dashboard.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);