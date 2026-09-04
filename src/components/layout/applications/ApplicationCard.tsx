import type { Application } from "../../../types/application";

import { LuPencil, LuTrash2 } from "react-icons/lu";

type ApplicationCardProps = {
    application: Application;
    onEdit: (application: Application) => void;
};

export default function ApplicationCard({
    application,
    onEdit,
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
            
            <button 
                type="button" 
                onClick={() => onEdit(application)}
                className="text-green-600 hover:text-green-800">
                <LuPencil size={18} />
            </button>
            <button
                type="button"
                className="text-red-600 hover:text-red-800">
                <LuTrash2 size={18} />
            </button>
        </div>
    );
}