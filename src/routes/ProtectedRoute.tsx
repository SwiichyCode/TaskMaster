import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const auth = getAuth();

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return <div>{user ? children : null}</div>;
};
