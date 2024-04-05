"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
export const SessionCustomProvider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
