import { useEffect, useState } from "react";
import type { Application, ApplicationFormData } from "../types/application";

const STORAGE_KEY = "joblyst_applications";

export function useApplications() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedApplications = localStorage.getItem(STORAGE_KEY);

            if (storedApplications) {
                setApplications(JSON.parse(storedApplications));
            }
        } catch {
            setError("Failed to load your applications.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) return;

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(applications)
            );
        } catch {
            setError("Failed to save your applications.");
        }
    }, [applications, isLoading]);

    const add = (data: ApplicationFormData) => {
        const newApplication: Application = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        };

        setApplications((prev) => [...prev, newApplication]);
    };

    const update = (id: string, data: ApplicationFormData) => {
        setApplications((prev) =>
            prev.map((application) =>
                application.id === id
                    ? {
                        ...application,
                        ...data,
                    }
                    : application
            )
        );
    };

    const remove = (id: string) => {
        setApplications((prev) =>
            prev.filter((application) => application.id !== id)
        );
    };

    const getById = (id: string) => {
        return applications.find(
            (application) => application.id === id
        );
    };

    return {
        applications,
        isLoading,
        error,
        add,
        update,
        remove,
        getById,
    };
}