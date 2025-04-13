"use client";

import type { ReactNode } from "react";
// import { BootstrapClient } from "./bootstrap-client"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <BootstrapClient /> */}
      {children}
    </>
  );
}
