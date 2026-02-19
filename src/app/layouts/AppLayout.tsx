import { Navbar } from "@widgets/navbar";
import { Outlet } from "react-router-dom";

import "./AppLayout.css";

export const AppLayout = () => (
  <div className="app-layout">
    <Navbar />
    <main className="app-layout__content">
      <Outlet />
    </main>
  </div>
);
