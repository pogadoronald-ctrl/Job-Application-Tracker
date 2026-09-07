import { useState } from "react";
import type { Application } from "../types/application";

import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 
import EditApplicationModal from "../components/layout/applications/EditApplicationModal";
import DeleteApplicationModal from "../components/layout/applications/DeleteApplicationModal";
import ViewApplicationModal from "../components/layout/applications/ViewApplicationModal";

import { useApplicationsContext } from "../context/ApplicationsContext";

export default function Applications() {
    const { applications, remove } = useApplicationsContext();
    
    const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

    const [deletingApplication, setDeletingApplication] =
    useState<Application | null>(null);

    const [viewingApplication, setViewingApplication] =
    useState<Application | null>(null);
    
    const [searchTerm, setSearchTerm ] = useState("");
    const filteredApplications = applications.filter((application) => {
    const search = searchTerm.toLowerCase();

        return (
            application.company.toLowerCase().includes(search) ||
            application.position.toLowerCase().includes(search) ||
            application.location.toLowerCase().includes(search) ||
            application.status.toLowerCase().includes(search) ||
            application.employmentType.toLowerCase().includes(search) ||
            application.dateApplied.toLowerCase().includes(search) 
        );
    });


    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Applications</h1>
                <p className="text-gray-500">
                Keep track of all your job applications.
                </p>
            </div>

            <div className="relative max-w-sm">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search applications..."
                    className="w-full rounded-lg border px-4 py-2.5 pr-10 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div className="hidden md:block">
                <ApplicationTable 
                    applications={filteredApplications} 
                    onEdit={setEditingApplication}
                    onDelete={setDeletingApplication}
                    onView={setViewingApplication}
                />
            </div>

            <div className="space-y-4 md:hidden">
                {filteredApplications.map((application) => (
                <ApplicationCard
                    key={application.id}
                    application={application}
                    onEdit={setEditingApplication}
                    onDelete={setDeletingApplication}
                    onView={setViewingApplication}
                />
                ))}
            </div>
            
            {editingApplication && (
                <EditApplicationModal
                    application={editingApplication}
                    onClose={() => setEditingApplication(null)}
                />
            )}

            {deletingApplication && (
                <DeleteApplicationModal
                    application={deletingApplication}
                    onClose={() => setDeletingApplication(null)}
                    onConfirm={() => {
                        remove(deletingApplication.id);
                        setDeletingApplication(null);
                    }}
                />
            )}

            {viewingApplication && (
                <ViewApplicationModal
                    application={viewingApplication}
                    onClose={() => setViewingApplication(null)}
                />
            )}
        </div>
    );
}