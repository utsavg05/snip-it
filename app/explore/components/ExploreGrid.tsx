"use client";

import ExploreSkeleton from "./ExploreSkeleton";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export default function ExploreGrid({ isLoading, children }: Props) {
  if (isLoading) {
    return <ExploreSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
