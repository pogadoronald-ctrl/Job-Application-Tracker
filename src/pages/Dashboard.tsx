import DashboardStats from "../components/dashboard/DashboardStats";
import ApplicationStatus from "../components/dashboard/ApplicationStatus";
import RateMetrics from "../components/dashboard/RateMetrics";

export default function Dashboard() {

    return (
        <> 
        <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <DashboardStats  />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"> 
            <ApplicationStatus />
            <RateMetrics />
        </div>
        </>
    );
}