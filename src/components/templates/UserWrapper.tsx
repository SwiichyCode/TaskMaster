import React from "react";
import { useAuth } from "../../context/AuthContext";

interface UserLayoutProps {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: UserLayoutProps) => {
  const { user } = useAuth();

  return user.uid && children;
};
