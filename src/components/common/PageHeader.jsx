import { useNavigate, useLocation } from "react-router-dom";

export default function PageHeader({ title }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
        }}>
            {location.pathname !== "/" && (
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid #e5e7eb",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        color: "#6b7280",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ffffff"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 18, height: 18 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
            )}
            <h1 style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#111827",
                margin: 0
            }}>
                {title}
            </h1>
        </div>
    );
}