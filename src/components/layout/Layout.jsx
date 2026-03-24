import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PageHeader from "../common/PageHeader";
import { getPageConfig } from "../../utils/getPageConfig";
import { Outlet, useLocation } from "react-router-dom";
import { usePageAction } from "../../context/PageActionContext";

export default function Layout() {
  const location = useLocation();
  const { title, actionLabel } = getPageConfig(location.pathname);
  const { action } = usePageAction();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right panel: Navbar on top, scrollable content below */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <Navbar />

        {/* Page Header Area - Only show if there is a title or action */}
        {(title || actionLabel) && (
          <div className="px-6 py-4 flex items-center justify-between gap-3">
            <PageHeader title={title} />

            {/* Dynamic Page Action Button - Linked to Global PageActionContext */}
            {actionLabel && (
              <button 
                onClick={() => action && action()}
                className={`
                  flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl border
                  shadow-sm transition-all duration-200
                  ${action 
                    ? "bg-white text-indigo-600 border-gray-200 hover:bg-gray-50 cursor-pointer" 
                    : "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed opacity-60"
                  }
                `}
              >
                {actionLabel} <span className="text-lg">+</span>
              </button>
            )}
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-6">
          <div className="min-h-full bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}