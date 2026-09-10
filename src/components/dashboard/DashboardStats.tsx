import { useApplicationsContext } from "../../context/ApplicationsContext";
import StatCard from "./StatCard";

export default function DashboardStats() {
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
    ).length;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
            title="Total Applications"
            value={totalApplications}
        />

        <StatCard
            title="Interviews"
            value={interviews}
        />

        <StatCard
            title="Offers"
            value={offers}
        />

        <StatCard
            title="Rejected"
            value={rejected}
        />
        </div>
    );
}