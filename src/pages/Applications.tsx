import { useState } from "react";
import type { Application } from "../types/application";

import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 
import EditApplicationModal from "../components/layout/applications/EditApplicationModal";
import DeleteApplicationModal from "../components/layout/applications/DeleteApplicationModal";

import { useApplicationsContext } from "../context/ApplicationsContext";

export default function Applications() {
    const { applications, remove } = useApplicationsContext();

    const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

    const [deletingApplication, setDeletingApplication] =
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
                    onDelete={setDeletingApplication}
                />
            </div>

            <div className="space-y-4 md:hidden">
                {applications.map((application) => (
                <ApplicationCard
                    key={application.id}
                    application={application}
                    onEdit={setEditingApplication}
                    onDelete={setDeletingApplication}
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
        </div>
    );
}