"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext(false);

export function ScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prevY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > prevY);
      prevY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <ScrollContext.Provider value={hidden}>{children}</ScrollContext.Provider>;
}

export function useScrollHidden() {
  return useContext(ScrollContext);
}
