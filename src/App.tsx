import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export const App = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ProtectedRoute>
    </BrowserRouter>
  );
};
