import { useApplicationsContext } from "../../context/ApplicationsContext";

export default function ApplicationStatus() {
    const { applications } = useApplicationsContext();

    const totalApplications = applications.length;

    const statuses = [
        {
            label: "Interview",
            count: applications.filter(
                (application) => application.status === "Interview"
            ).length,
        },
        {
            label: "Offer",
            count: applications.filter(
                (application) => application.status === "Offer"
            ).length,
        },
        {
            label: "Rejected",
            count: applications.filter(
                (application) => application.status === "Rejected"
            ).length,
        },
        {
            label: "Withdrawn",
            count: applications.filter(
                (application) => application.status === "Withdrawn"
            ).length,
        },
    ];

    return (
        <section className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">
                Application Status
            </h2>

            <div className="mt-6 space-y-5">
                {statuses.map((status) => {
                    const percentage =
                        totalApplications > 0
                            ? (status.count / totalApplications) * 100
                            : 0;

                    return (
                        <div key={status.label}>
                            <div className="mb-2 flex justify-between text-sm">
                                <span>{status.label}</span>
                                <span className="font-medium">
                                    {status.count}
                                </span>
                            </div>

                            <div className="h-2 w-full rounded-full bg-gray-100">
                                <div
                                    className="h-2 rounded-full bg-blue-600"
                                    style={{
                                        width: `${percentage}%`,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}