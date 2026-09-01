import { mockApplications } from "../data/mockApplications";
import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 

export default function Applications() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Applications</h1>
                <p className="text-gray-500">
                Keep track of all your job applications.
                </p>
            </div>

            <div className="hidden md:block">
                <ApplicationTable applications={mockApplications} />
            </div>

            <div className="space-y-4 md:hidden">
                {mockApplications.map((application) => (
                <ApplicationCard
                    key={application.id}
                    application={application}
                />
                ))}
            </div>
        </div>
    );
}