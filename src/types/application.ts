export type ApplicationStatus = 
    | 'Applied'
    | 'Interview'
    | 'Offer'
    | 'Rejected'
    | 'Withdrawn'

export type EmploymentType =
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'

export interface ApplicationFormData {
    company: string
    position: string
    location: string
    status: ApplicationStatus
    employmentType: EmploymentType
    dateApplied: string
    jobLink: string
    salary?: number
    notes?: string
}

export interface Application extends ApplicationFormData{
    id:string
    createdAt: string
}