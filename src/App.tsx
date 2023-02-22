import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const Dashboard = React.lazy(() =>
  import("./components/pages/Dashboard").then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);
export const App = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ProtectedRoute>
    </BrowserRouter>
  );
};
