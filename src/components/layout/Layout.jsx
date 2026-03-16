import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PageHeader from "../common/PageHeader";
import { getPageConfig } from "../../utils/getPageConfig";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const { title, actionLabel } = getPageConfig(location.pathname);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right panel: Navbar on top, scrollable content below */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <Navbar />

        {/* Page Header Area */}
        <div style={{
          padding: "16px 24px 0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px"
        }}>
          <PageHeader title={title} />

          {/* Dynamic Page Action Button */}
          {actionLabel && (
            <button style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              {actionLabel} <span style={{ fontSize: '18px' }}>+</span>
            </button>
          )}
        </div>

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 24,
          }}
        >
          <div style={{
            minHeight: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            padding: "24px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
          }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}