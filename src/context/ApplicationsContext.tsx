import { createContext, useContext } from "react";
import { useApplications } from "../hooks/useApplications";
import type { ReactNode } from "react";

type ApplicationsContextType = ReturnType<typeof useApplications>;

const ApplicationsContext = createContext<
    ApplicationsContextType | undefined
>(undefined);

export function ApplicationsProvider({
    children,
    }: {
    children: ReactNode;
    }) {
    const applications = useApplications();

    return (
        <ApplicationsContext.Provider value={applications}>
        {children}
        </ApplicationsContext.Provider>
    );
    }

    export function useApplicationsContext() {
    const context = useContext(ApplicationsContext);

    if (!context) {
        throw new Error(
        "useApplicationsContext must be used inside ApplicationsProvider"
        );
    }

    return context;
}