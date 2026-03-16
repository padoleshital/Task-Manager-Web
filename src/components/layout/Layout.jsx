import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
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
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 24,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}