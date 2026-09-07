import { LuClipboardList, LuSearch } from "react-icons/lu";

type EmptyApplicationStateProps = {
    filtered: boolean;
    onClearFilters?: () => void;
};

export default function EmptyApplicationState({
    filtered,
    onClearFilters,
}: EmptyApplicationStateProps) {
    if (filtered) {
        return (
            <div className="rounded-xl border bg-white px-6 py-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <LuSearch className="h-5 w-5 text-gray-500" />
                </div>

                <h2 className="text-lg font-semibold text-gray-900">
                    No applications found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                    No applications match your current search or filter.
                    Try adjusting your search or filters.
                </p>

                {onClearFilters && (
                    <button
                        type="button"
                        onClick={onClearFilters}
                        className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Clear Filters
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="rounded-xl border bg-white px-6 py-12 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <span className="text-xl">
                    <LuClipboardList size={26} />
                </span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
                No applications yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Start tracking your job applications by adding your first
                application.
            </p>
        </div>
    );
}
