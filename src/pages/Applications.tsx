import { useState } from "react";
import type { Application } from "../types/application";

import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 
import EditApplicationModal from "../components/layout/applications/EditApplicationModal";

import { useApplicationsContext } from "../context/ApplicationsContext";

export default function Applications() {
    const { applications } = useApplicationsContext();

    const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Applications</h1>
                <p className="text-gray-500">
                Keep track of all your job applications.
                </p>
            </div>

            <div className="hidden md:block">
                <ApplicationTable 
                    applications={applications} 
                    onEdit={setEditingApplication}
                />
            </div>

            <div className="space-y-4 md:hidden">
                {applications.map((application) => (
                <ApplicationCard
                    key={application.id}
                    application={application}
                    onEdit={setEditingApplication}
                />
                ))}
            </div>
            
            {editingApplication && (
                <EditApplicationModal
                    application={editingApplication}
                    onClose={() => setEditingApplication(null)}
                />
            )}
        </div>
    );
}