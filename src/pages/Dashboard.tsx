import { mockApplications } from "../data/mockApplications";

export default function Dashboard() {
    const totalApplications = mockApplications.length;

    return (
        <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
            Track and manage your job applications.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg shadow-sm bg-white p-5">
            <p className="text-sm text-gray-500">Total Applications</p>
            <p className="mt-2 text-3xl font-bold">{totalApplications}</p>
            </div>

            <div className="rounded-lg shadow-sm bg-white p-5">
            <p className="text-sm text-gray-500">Applied</p>
            <p className="mt-2 text-3xl font-bold">2</p>
            </div>

            <div className="rounded-lg shadow-sm bg-white p-5">
            <p className="text-sm text-gray-500">Interviews</p>
            <p className="mt-2 text-3xl font-bold">1</p>
            </div>

            <div className="rounded-lg shadow-sm bg-white p-5">
            <p className="text-sm text-gray-500">Offers</p>
            <p className="mt-2 text-3xl font-bold">1</p>
            </div>
        </div>
        </div>
    );
}