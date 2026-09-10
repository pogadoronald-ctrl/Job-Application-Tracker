import { useApplicationsContext } from "../../context/ApplicationsContext";

export default function RateMetrics() {
    const { applications } = useApplicationsContext();

    const totalApplications = applications.length;

    const interviews = applications.filter(
        (application) => application.status === "Interview"
    ).length;

    const offers = applications.filter(
        (application) => application.status === "Offer"
    ).length;

    const rejected = applications.filter(
        (application) => application.status === "Rejected"
    ).length

    const withdrawn = applications.filter(
        (application) => application.status === "Withdrawn"
    ).length

    const interviewRate =
        totalApplications > 0
            ? (interviews / totalApplications) * 100
            : 0;

    const offerRate =
        totalApplications > 0
            ? (offers / totalApplications) * 100
            : 0;

    const rejectedRate =
        totalApplications > 0
            ? (rejected / totalApplications) * 100
            : 0;

    const withdrawnRate =
        totalApplications > 0
            ? (withdrawn / totalApplications) * 100
            : 0;

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-white p-6">
                <p className="text-sm text-gray-500">
                    Interview Rate
                </p>

                <p className="mt-2 text-3xl font-semibold">
                    {interviewRate.toFixed(1)}%
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    {interviews} of {totalApplications} applications
                </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
                <p className="text-sm text-gray-500">
                    Offer Rate
                </p>

                <p className="mt-2 text-3xl font-semibold">
                    {offerRate.toFixed(1)}%
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    {offers} of {totalApplications} applications
                </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
                <p className="text-sm text-gray-500">
                    Rejected Rate
                </p>

                <p className="mt-2 text-3xl font-semibold">
                    {rejectedRate.toFixed(1)}%
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    {rejected} of {totalApplications} applications
                </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
                <p className="text-sm text-gray-500">
                    Withdrawn Rate
                </p>

                <p className="mt-2 text-3xl font-semibold">
                    {withdrawnRate.toFixed(1)}%
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    {withdrawn} of {totalApplications} applications
                </p>
            </div>
        </section>
    );
}