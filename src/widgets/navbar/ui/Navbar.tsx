import { NavLink } from "react-router-dom";

import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Dashboard" },
  { to: "/deals", label: "Deals" },
  { to: "/customers", label: "Customers" },
  { to: "/tasks", label: "Tasks" },
];

export const Navbar = () => (
  <aside className="navbar">
    <div className="navbar__logo">CRMenti</div>
    <nav className="navbar__nav">
      {NAV_LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            ["navbar__link", isActive ? "navbar__link--active" : ""]
              .join(" ")
              .trim()
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);
