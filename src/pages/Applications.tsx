import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 

import { useApplicationsContext } from "../context/ApplicationsContext";

export default function Applications() {
    const { applications } = useApplicationsContext();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Applications</h1>
                <p className="text-gray-500">
                Keep track of all your job applications.
                </p>
            </div>

            <div className="hidden md:block">
                <ApplicationTable applications={applications} />
            </div>

            <div className="space-y-4 md:hidden">
                {applications.map((application) => (
                <ApplicationCard
                    key={application.id}
                    application={application}
                />
                ))}
            </div>
        </div>
    );
}