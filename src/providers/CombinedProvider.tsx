import React from "react";
import { ThemesProvider } from "./ThemesProvider";
import { StoreProvider } from "./StoreProvider";
import { AuthContextProvider } from "../context/AuthContext";

export const CombinedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContextProvider>
      <StoreProvider>
        <ThemesProvider>{children}</ThemesProvider>
      </StoreProvider>
    </AuthContextProvider>
  );
};
