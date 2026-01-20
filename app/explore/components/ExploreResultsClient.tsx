// "use client";

// import { useEffect, useState } from "react";
// import ExploreGrid from "./ExploreGrid";

// type Props = {
//   children: React.ReactNode;
// };

// export default function ExploreResultsClient({ children }: Props) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1200); // ⏱️ 1.2s feels perfect (not fake, not slow)

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <ExploreGrid isLoading={isLoading}>
//       {!isLoading && children}
//     </ExploreGrid>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ExploreGrid from "./ExploreGrid";

type Props = {
  children: React.ReactNode;
};

export default function ExploreResultsClient({ children }: Props) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🔥 Trigger loading on ANY param change
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // 300–500ms feels instant but smooth

    return () => clearTimeout(timer);
  }, [searchParams.toString()]); // 👈 key fix

  return (
    <ExploreGrid isLoading={isLoading}>
      {!isLoading && children}
    </ExploreGrid>
  );
}
