export default function ApplicationLoading() {
    return (
        <div className="rounded-xl border bg-white px-6 py-12 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

            <p className="mt-4 text-sm text-gray-500">
                Loading applications...
            </p>
        </div>
    );
}