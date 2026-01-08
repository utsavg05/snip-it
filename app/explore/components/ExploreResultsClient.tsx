"use client";

import { useEffect, useState } from "react";
import ExploreGrid from "./ExploreGrid";

type Props = {
  children: React.ReactNode;
};

export default function ExploreResultsClient({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // ⏱️ 1.2s feels perfect (not fake, not slow)

    return () => clearTimeout(timer);
  }, []);

  return (
    <ExploreGrid isLoading={isLoading}>
      {!isLoading && children}
    </ExploreGrid>
  );
}
