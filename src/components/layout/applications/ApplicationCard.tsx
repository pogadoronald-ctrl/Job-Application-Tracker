import type { Application } from "../../../types/application";

interface ApplicationCardProps {
    application: Application;
}

export default function ApplicationCard({
    application,
    }: ApplicationCardProps) {
    return (
        <div className="rounded-lg border bg-white p-5">
        <div className="flex items-start justify-between gap-4">
            <div>
            <h2 className="font-semibold">
                {application.company}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                {application.position}
            </p>
            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {application.status}
            </span>
        </div>

        <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-500">
            Date Applied
            </p>

            <p className="mt-1 text-sm">
            {application.dateApplied}
            </p>
        </div>
        </div>
    );
}