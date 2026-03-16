import { NavLink } from "react-router-dom";

/* ── Navigation items ───────────────────────────────────────────── */
const navLinks = [
  {
    to: "/",
    label: "Dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 0 1-.75.75H15.75A.75.75 0 0 1 15 21v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 21V9.75z" />
      </svg>
    ),
  },
  {
    to: "/team",
    label: "Team",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" />
      </svg>
    ),
  },
  {
    to: "/projects",
    label: "Projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44z" />
      </svg>
    ),
  },
  {
    to: "/calendar",
    label: "Calendar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    to: "/documents",
    label: "Documents",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
      </svg>
    ),
  },
  {
    to: "/reports",
    label: "Reports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

/* ── Teams ──────────────────────────────────────────────────────── */
const teams = [
  { initial: "H", name: "Heroicons",    bg: "#ede9fe", color: "#6d28d9" },
  { initial: "T", name: "Tailwind Labs", bg: "#dbeafe", color: "#1d4ed8" },
  { initial: "W", name: "Workcation",   bg: "#dcfce7", color: "#15803d" },
];

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
                  if (!e.currentTarget.classList.contains("active")) {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.getAttribute("aria-current")) {
                    e.currentTarget.style.backgroundColor =
                      e.currentTarget.getAttribute("data-active") === "true"
                        ? "#eef2ff"
                        : "transparent";
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