import { LuCircleAlert } from "react-icons/lu";

type ApplicationErrorProps = {
    message: string;
};

export default function ApplicationError({
    message,
}: ApplicationErrorProps) {
    return (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <LuCircleAlert className="h-6 w-6 text-red-600" />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
                Something went wrong
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                {message}
            </p>
        </div>
    );
}