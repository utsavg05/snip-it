import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-[#0b0f0e]/80 p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-4 w-10" />
          </div>

          <Skeleton className="mb-3 h-5 w-3/4" />
          <Skeleton className="h-28 w-full rounded-xl" />

          <div className="mt-4 flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      ))}
    </div>
  );
}
