import { ChevronLeft, ChevronRight } from "lucide-react";

interface ApplicationPaginationProps {
    currentPage: number;
    totalPages: number;
    totalApplications: number;
    applicationsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function ApplicationPagination({
    currentPage,
    totalPages,
    totalApplications,
    applicationsPerPage,
    onPageChange,
}: ApplicationPaginationProps) {
    const startIndex = (currentPage - 1) * applicationsPerPage;
    const startItem = startIndex + 1;
    const endItem = Math.min(
        startIndex + applicationsPerPage,
        totalApplications
    );

    return (
        <div className="flex flex-col gap-4 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
                Showing {startItem}–{endItem} of {totalApplications} applications
            </p>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>

                <span className="px-2 text-sm font-medium">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}