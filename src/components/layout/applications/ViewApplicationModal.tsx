import type { Application } from "../../../types/application";
import formatDate from "../../../lib/formatDate";

type ViewApplicationModalProps = {
    application: Application;
    onClose: () => void;
};

export default function ViewApplicationModal({
    application,
    onClose,
}: ViewApplicationModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            Application Details
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {application.position} at {application.company}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                        title="Close"
                    >
                        ×
                    </button>
                </div>

                <div className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <p className="text-sm text-gray-500">
                                Company
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.company}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Position
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.position}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Location
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.location}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Status
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.status}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Employment Type
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.employmentType}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Date Applied
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {formatDate(application.dateApplied)}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Salary
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                                {application.salary
                                    ? `₱${application.salary.toLocaleString()}`
                                    : "Not specified"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Job Link
                            </p>

                            {application.jobLink ? (
                                <a
                                    href={application.jobLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 block truncate font-medium text-blue-600 hover:text-blue-800"
                                >
                                    View Job Posting
                                </a>
                            ) : (
                                <p className="mt-1 font-medium text-gray-900">
                                    Not specified
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Notes
                        </p>

                        <div className="mt-1 rounded-lg bg-gray-50 p-4">
                            <p className="whitespace-pre-wrap text-sm text-gray-700">
                                {application.notes || "No notes added."}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}