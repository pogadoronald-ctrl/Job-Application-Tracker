import { useState, useEffect } from "react";
import type { Application } from "../types/application";

import ApplicationTable from "../components/layout/applications/ApplicationTable";
import ApplicationCard from "../components/layout/applications/ApplicationCard"; 
import EditApplicationModal from "../components/layout/applications/EditApplicationModal";
import DeleteApplicationModal from "../components/layout/applications/DeleteApplicationModal";
import ViewApplicationModal from "../components/layout/applications/ViewApplicationModal";
import EmptyApplicationState from "../components/layout/applications/EmptyApplicationState";
import ApplicationLoading from "../components/layout/applications/ApplicationLoading";
import ApplicationError from "../components/layout/applications/ApplicationError";
import ApplicationPagination from "../components/layout/applications/ApplicationPagination";

import { useApplicationsContext } from "../context/ApplicationsContext";

export default function Applications() {
    const { applications, remove, isLoading, error } = useApplicationsContext();
    
    const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

    const [deletingApplication, setDeletingApplication] =
    useState<Application | null>(null);

    const [viewingApplication, setViewingApplication] =
    useState<Application | null>(null);
    
    const [searchTerm, setSearchTerm ] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const hasFilters =
    searchTerm.trim() !== "" ||
    statusFilter !== "All";

    const filteredApplications = applications.filter((application) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
            application.company.toLowerCase().includes(search) ||
            application.position.toLowerCase().includes(search) ||
            application.location.toLowerCase().includes(search) ||
            application.status.toLowerCase().includes(search) ||
            application.employmentType.toLowerCase().includes(search) ||
            application.dateApplied.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            application.status === statusFilter;

        return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
        switch (sortBy) {
            case "newest":
                return (
                    new Date(b.dateApplied).getTime() -
                    new Date(a.dateApplied).getTime()
                );

            case "oldest":
                return (
                    new Date(a.dateApplied).getTime() -
                    new Date(b.dateApplied).getTime()
                );

            case "company-asc":
                return a.company.localeCompare(b.company);

            case "company-desc":
                return b.company.localeCompare(a.company);

            default:
                return 0;
        }
    });

    const [currentPage, setCurrentPage] = useState(1);

    const applicationsPerPage = 10;

    const totalPages = Math.ceil(
        filteredApplications.length / applicationsPerPage
    );

    const startIndex = (currentPage - 1) * applicationsPerPage;

    const paginatedApplications = filteredApplications.slice(
        startIndex,
        startIndex + applicationsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, statusFilter, sortBy]);

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Applications</h1>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search applications..."
                    className="w-full rounded-lg border px-4 py-2.5 pr-10 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-lg border px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    <option value="All">All Statuses</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Withdrawn">Withdrawn</option>
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                    <option value="newest">Newest Applied</option>
                    <option value="oldest">Oldest Applied</option>
                    <option value="company-asc">Company A–Z</option>
                    <option value="company-desc">Company Z–A</option>
                </select>
            </div>

            {isLoading ? (
                <ApplicationLoading />
            ) : error ? (
                <ApplicationError message={error} />
            ) : filteredApplications.length === 0 ? (
                <EmptyApplicationState
                    filtered={hasFilters}
                    onClearFilters={() => {
                        setSearchTerm("");
                        setStatusFilter("All");
                    }}
                />
            ) : (
                <>
                    <div className="hidden md:block">
                        <ApplicationTable
                            applications={paginatedApplications}
                            onEdit={setEditingApplication}
                            onDelete={setDeletingApplication}
                            onView={setViewingApplication}
                        />
                    </div>

                    <div className="space-y-4 md:hidden">
                        {paginatedApplications.map((application) => (
                            <ApplicationCard
                                key={application.id}
                                application={application}
                                onEdit={setEditingApplication}
                                onDelete={setDeletingApplication}
                                onView={setViewingApplication}
                            />
                        ))}
                    </div>
                </>
            )}
            
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

            {totalPages > 1 && (
                <ApplicationPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalApplications={filteredApplications.length}
                    applicationsPerPage={applicationsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}