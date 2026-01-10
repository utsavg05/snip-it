// "use client";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// type Props = {
//   currentPage: number;
//   totalPages: number;
// };

// export default function ExplorePagination({
//   currentPage,
//   totalPages,
// }: Props) {
//   if (totalPages <= 1) return null;

//   return (
//     <div className="mt-12 flex justify-center">
//       <Pagination>
//         <PaginationContent>
//           {/* Previous */}
//           <PaginationItem>
//             <PaginationPrevious
//               href={`/explore?page=${Math.max(1, currentPage - 1)}`}
//               aria-disabled={currentPage === 1}
//             />
//           </PaginationItem>

//           {/* Page numbers */}
//           {Array.from({ length: totalPages }).map((_, i) => {
//             const page = i + 1;
//             return (
//               <PaginationItem key={page}>
//                 <PaginationLink
//                 className="text-gray-700"
//                   href={`/explore?page=${page}`}
//                   isActive={page === currentPage}
//                 >
//                   {page}
//                 </PaginationLink>
//               </PaginationItem>
//             );
//           })}

//           {/* Next */}
//           <PaginationItem>
//             <PaginationNext
//               href={`/explore?page=${Math.min(
//                 totalPages,
//                 currentPage + 1
//               )}`}
//               aria-disabled={currentPage === totalPages}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// }




// Claude UI
"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function ExplorePagination({
  currentPage,
  totalPages,
}: Props) {
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // Show max 5 page numbers on mobile, 7 on desktop

    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
      <Pagination>
        <PaginationContent className="gap-1 sm:gap-2">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={`/explore?page=${Math.max(1, currentPage - 1)}`}
              aria-disabled={currentPage === 1}
              className={`
                rounded-lg border border-white/10 bg-[#0b0f0e] 
                text-white transition-all h-9 sm:h-10 px-2 sm:px-4
                ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:bg-white/5 hover:border-emerald-500/30 hover:text-emerald-400"
                }
              `}
            />
          </PaginationItem>

          {/* Page numbers */}
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <PaginationItem key={`ellipsis-${index}`} className="hidden sm:block">
                  <PaginationEllipsis className="text-slate-400" />
                </PaginationItem>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <PaginationItem key={pageNum} className={pageNum > 3 && pageNum < totalPages - 2 ? "hidden sm:block" : ""}>
                <PaginationLink
                  href={`/explore?page=${pageNum}`}
                  isActive={isActive}
                  className={`
                    rounded-lg border transition-all h-9 w-9 sm:h-10 sm:w-10
                    text-sm font-semibold
                    ${
                      isActive
                        ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                        : "border-white/10 bg-[#0b0f0e] text-slate-300 hover:bg-white/5 hover:border-emerald-500/30 hover:text-white"
                    }
                  `}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={`/explore?page=${Math.min(totalPages, currentPage + 1)}`}
              aria-disabled={currentPage === totalPages}
              className={`
                rounded-lg border border-white/10 bg-[#0b0f0e] 
                text-white transition-all h-9 sm:h-10 px-2 sm:px-4
                ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:bg-white/5 hover:border-emerald-500/30 hover:text-emerald-400"
                }
              `}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
