interface StatCardProps {
    title: string;
    value: number;
}

export default function StatCard({
    title,
    value,
    }: StatCardProps) {
    return (
        <div className="rounded-lg border bg-white p-5">
        <p className="text-sm text-gray-500">{title}</p>

        <p className="mt-2 text-3xl font-semibold">
            {value}
        </p>
        </div>
    );
}