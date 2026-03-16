import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header
      style={{
        height: 64,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        gap: 16,
        flexShrink: 0,
      }}
    >
      {/* ── Search bar ───────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: "8px 12px",
          width: 280,
        }}
      >
        {/* Search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#9ca3af"
          style={{ width: 16, height: 16, flexShrink: 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 14,
            color: "#374151",
            width: "100%",
          }}
        />
      </div>

      {/* ── Right side: Bell + User ───────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Bell */}
        <button
          style={{
            padding: "8px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="#6b7280"
            style={{ width: 20, height: 20 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        {/* User Profile */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            borderRadius: 8,
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Tom Cook"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>
            Tom Cook
          </span>
          {/* Chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#6b7280"
            style={{ width: 14, height: 14 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}