// "use client";

// import ExploreSkeleton from "./ExploreSkeleton";

// type Props = {
//   isLoading: boolean;
//   children: React.ReactNode;
// };

// export default function ExploreGrid({ isLoading, children }: Props) {
//   if (isLoading) {
//     return <ExploreSkeleton />;
//   }

//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {children}
//     </div>
//   );
// }



"use client";

import ExploreSkeleton from "./ExploreSkeleton";

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default function ExploreGrid({ children, isLoading }: Props) {
  if (isLoading) {
    return <ExploreSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {children}
    </div>
  );
}