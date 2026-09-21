import AddApplicationForm from "../components/layout/applications/AddApplicationForm"

export default function AddApplication() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
        <div>
            <h1 className="text-2xl font-bold">Add Application</h1>
        </div>

        <div className="rounded-lg border bg-white p-6">
            <AddApplicationForm />
        </div>
        </div>
    )
}