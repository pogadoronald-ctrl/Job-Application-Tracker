import { useEffect, useState } from "react";
import type { Application, ApplicationFormData } from "../types/application";

const STORAGE_KEY = "joblyst_applications";

export function useApplications() {
    const [applications, setApplications] = useState<Application[]>(() => {
        const storedApplications = localStorage.getItem(STORAGE_KEY);

        if (!storedApplications) {
            return [];
        }

        try {
            return JSON.parse(storedApplications);
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(applications)
        );
    }, [applications]);

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
        add,
        update,
        remove,
        getById,
    };
}