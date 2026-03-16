import { Routes,Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"
       element={
        <Layout >
              <Dashboard />
        </Layout>   
      }>
        
      </Route>
    </Routes>
  );
}
