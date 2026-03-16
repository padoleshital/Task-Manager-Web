import { NavLink } from "react-router-dom";
import { navLinks } from "../../config/sidebarLinks";
import { teams } from "../../config/teams";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 256,
        minWidth: 256,
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {/* ── Logo ───────────────────────────────────────────────── */}
      <div style={{ padding: "20px 20px 12px 20px" }}>
        <svg
          viewBox="0 0 40 24"
          style={{ width: 36, height: 22 }}
          aria-label="Logo"
        >
          <path
            d="M0 12C4 4 8 0 12 4C16 8 16 16 20 16C24 16 24 8 28 4C32 0 36 4 40 12C36 20 32 24 28 20C24 16 24 8 20 8C16 8 16 16 12 20C8 24 4 20 0 12Z"
            fill="#6366f1"
          />
        </svg>
      </div>

      {/* ── Primary Navigation ─────────────────────────────────── */}
      <nav style={{ flex: 1, padding: "4px 12px 0 12px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map(({ to, label, icon }) => (
            <li key={to} style={{ marginBottom: 2 }}>
              <NavLink
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "9px 12px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? "#4f46e5" : "#374151",
                  backgroundColor: isActive ? "#eef2ff" : "transparent",
                  transition: "background-color 0.15s, color 0.15s",
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes("rgb(238, 242, 255)")) {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.getAttribute("aria-current")) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  } else {
                     e.currentTarget.style.backgroundColor = "#eef2ff";
                  }
                }}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Your Teams ───────────────────────────────────────── */}
        <div style={{ marginTop: 28 }}>
          <p
            style={{
              padding: "0 12px 8px 12px",
              fontSize: 11,
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Your teams
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {teams.map(({ initial, name, bg, color }) => (
              <li key={name} style={{ marginBottom: 2 }}>
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "9px 12px",
                    borderRadius: 8,
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#374151",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      backgroundColor: bg,
                      color: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {initial}
                  </span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}