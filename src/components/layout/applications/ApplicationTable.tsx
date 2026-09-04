import type { Application } from "../../../types/application";

import { LuPencil, LuTrash2 } from "react-icons/lu";

type ApplicationTableProps = {
    applications: Application[];
    onEdit: (application: Application) => void;
};

export default function ApplicationTable({
    applications,
    onEdit,
    }: ApplicationTableProps) {
    return (
        <div className="overflow-x-auto rounded-lg border bg-white">
            <table className="w-full text-left text-sm">
                <thead className="border-b bg-gray-50">
                <tr>
                    <th className="px-6 py-4 font-medium">Company</th>
                    <th className="px-6 py-4 font-medium">Position</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Date Applied</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
                </thead>

                <tbody>
                {applications.map((application) => (
                    <tr
                    key={application.id}
                    className="border-b last:border-b-0"
                    >
                    <td className="px-6 py-4 font-medium">
                        {application.company}
                    </td>

                    <td className="px-6 py-4">
                        {application.position}
                    </td>

                    <td className="px-6 py-4">
                        {application.status}
                    </td>

                    <td className="px-6 py-4">
                        {application.dateApplied}
                    </td>

                    <td className="flex px-6 py-4 gap-2">
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
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}