"use client";

import { Suspense } from "react";
import Loader from "./Loader"; 

const RouteLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};

export default RouteLoader;
