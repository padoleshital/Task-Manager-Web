import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/tasks";
import Teams from "../pages/teams";
import Projects from "../pages/Projects";
import Calendar from "../pages/Calendar";
import Documents from "../pages/Documents";
import Reports from "../pages/Reports";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="tasks" element={<Tasks />}></Route>
        <Route path="teams" element={<Teams />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="calendar" element={<Calendar />}></Route>
        <Route path="documents" element={<Documents />}></Route>
        <Route path="reports" element={<Reports />}></Route>


      </Route>
    </Routes>
  );
}
