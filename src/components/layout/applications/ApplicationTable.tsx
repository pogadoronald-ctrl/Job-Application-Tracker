import type { Application } from "../../../types/application";

interface ApplicationTableProps {
    applications: Application[];
}

export default function ApplicationTable({
    applications,
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
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}