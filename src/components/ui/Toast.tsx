import { useEffect, type ReactNode } from "react";
import { LuCircleCheck, LuTrash2 } from "react-icons/lu";

export type ToastVariant = "success" | "deleted";

type ToastProps = {
    variant: ToastVariant;
    message: string;
    onClose: () => void;
    duration?: number;
};

const variantStyles: Record<ToastVariant, { border: string; icon: ReactNode }> = {
    success: { border: "border-green-200", icon: <LuCircleCheck className="text-green-600" size={18} /> },
    deleted: { border: "border-gray-200", icon: <LuTrash2 className="text-red-500" size={18} /> },
};

export default function Toast({ variant, message, onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const { border, icon } = variantStyles[variant];

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-lg border ${border} bg-white px-4 py-3 shadow-lg`}
        >
            {icon}
            <span className="text-sm text-gray-800">{message}</span>
            <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close notification"
            >
                ×
            </button>
        </div>
    );
}