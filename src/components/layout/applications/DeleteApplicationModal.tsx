import type { Application } from "../../../types/application";

type DeleteApplicationModalProps = {
    application: Application;
    onClose: () => void;
    onConfirm: () => void;
};

export default function DeleteApplicationModal({
    application,
    onClose,
    onConfirm,
}: DeleteApplicationModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-5">
                    <h2 className="text-xl font-bold text-gray-900">
                        Delete Application?
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Are you sure you want to delete your application
                        for{" "}
                        <span className="font-medium text-gray-700">
                            {application.position}
                        </span>{" "}
                        at{" "}
                        <span className="font-medium text-gray-700">
                            {application.company}
                        </span>
                        ?
                    </p>
                </div>

                <div className="flex justify-end gap-3">
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
                        className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}