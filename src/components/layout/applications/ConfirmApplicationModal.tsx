import type { ApplicationFormData } from "../../../types/application";

import formatDate from "../../../lib/formatDate";

type ConfirmApplicationModalProps = {
    data: ApplicationFormData;
    onClose: () => void;
    onConfirm: () => void;
};

export default function ConfirmApplicationModal({
    data,
    onClose,
    onConfirm,
}: ConfirmApplicationModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                        Please confirm the details before adding this
                        application
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
                    <div className="min-w-0">
                        <p className="break-words text-xs text-gray-500">Company</p>
                        <p className="font-medium text-gray-900">
                            {data.company}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="break-words text-xs text-gray-500">Position</p>
                        <p className="font-medium text-gray-900">
                            {data.position}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="break-words text-xs text-gray-500">Location</p>
                        <p className="font-medium text-gray-900">
                            {data.location}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-500">Status</p>
                        <p className="font-medium text-gray-900">
                            {data.status}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-500">Employment Type</p>
                        <p className="font-medium text-gray-900">
                            {data.employmentType}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-500">Date Applied</p>
                        <p className="font-medium text-gray-900">
                            {formatDate(data.dateApplied)}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-500">Job Link</p>
                        <p className="break-all font-medium text-gray-900">
                            {data.jobLink || "Not Specified"}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-500">Salary</p>
                        <p className="font-medium text-gray-900">
                            {data.salary}
                        </p>
                    </div>

                    <div className="min-w-0 sm:col-span-2"> 
                        <p className="text-xs text-gray-500">Notes</p>
                        <p className="whitespace-pre-wrap break-words text-sm text-gray-700">
                            {data.notes || "No Notes Added"}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}