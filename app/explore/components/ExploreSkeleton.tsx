// import { Skeleton } from "@/components/ui/skeleton";

// export default function ExploreSkeleton() {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {Array.from({ length: 9 }).map((_, i) => (
//         <div
//           key={i}
//           className="rounded-2xl border border-white/10 bg-[#0b0f0e]/80 p-5"
//         >
//           <div className="mb-4 flex items-center justify-between">
//             <Skeleton className="h-6 w-20 rounded-full" />
//             <Skeleton className="h-4 w-10" />
//           </div>

//           <Skeleton className="mb-3 h-5 w-3/4" />
//           <Skeleton className="h-28 w-full rounded-xl" />

//           <div className="mt-4 flex items-center justify-between">
//             <Skeleton className="h-4 w-24" />
//             <Skeleton className="h-4 w-12" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#0b0f0e] p-4 sm:p-5 animate-pulse"
        >
          <div className="mb-3 sm:mb-4 flex items-center justify-between">
            <Skeleton className="h-6 w-20 rounded-lg bg-emerald-500/10 border border-emerald-500/20" />
            <Skeleton className="h-4 w-10 rounded bg-white/5" />
          </div>

          <Skeleton className="mb-2 sm:mb-3 h-5 w-3/4 rounded bg-white/5" />
          <Skeleton className="h-24 sm:h-28 w-full rounded-lg bg-[#010409] border border-white/5" />

          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20" />
              <Skeleton className="h-4 w-20 rounded bg-white/5" />
            </div>
            <Skeleton className="h-7 w-7 rounded-lg bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}