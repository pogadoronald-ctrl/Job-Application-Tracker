import { LuCircleCheck } from "react-icons/lu";

type SuccessApplicationModalProps = {
    onClose: () => void;
};

export default function SuccessApplicationModal({
    onClose,
}: SuccessApplicationModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-xl">
                
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="text-2xl text-green-600">
                        <LuCircleCheck size={26} />
                    </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900">
                    Application Added Successfully!
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Your job application has been added to Joblyst.
                </p>

                <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                    Done
                </button>
            </div>
        </div>
    );
}