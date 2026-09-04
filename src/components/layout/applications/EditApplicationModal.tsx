import type { Application } from "../../../types/application";
import AddApplicationForm from "./AddApplicationForm";

type EditApplicationModalProps = {
    application: Application;
    onClose: () => void;
};

export default function EditApplicationModal({
    application,
    onClose,
}: EditApplicationModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold">
                            Edit Application
                        </h2>

                        <p className="text-sm text-gray-500">
                            Update your application details.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <AddApplicationForm
                    application={application}
                    onSuccess={onClose}
                />
            </div>
        </div>
    );
}