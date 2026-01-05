"use client";

import {
  Pagination,
  PaginationContent,
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

  return (
    <div className="mt-12 flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={`/explore?page=${Math.max(1, currentPage - 1)}`}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>

          {/* Page numbers */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                className="text-gray-700"
                  href={`/explore?page=${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={`/explore?page=${Math.min(
                totalPages,
                currentPage + 1
              )}`}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
