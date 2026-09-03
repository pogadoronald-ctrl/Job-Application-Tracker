import { z } from 'zod';

export const applicationSchema = z.object({
    company: z.string().min(1, "Company is required"),
    position: z.string().min(1, "Position is required"),
    location: z.string().min(1, "Location is required"),
    status: z.enum([
        'Applied',
        'Interview',
        'Offer',
        'Rejected',
        'Withdrawn',
    ],
    {
        error: "Please select current status",
    }),
    employmentType: z.enum([
        'Full-time',
        'Part-time',
        'Contract',
        'Internship',
    ],
    {
        error: "Please select an employment type"
    }),
    dateApplied: z.string().min(1, "Date applied is required"),
    jobLink: z.string().url("Please enter a valid link").or(z.literal('')),
    salary: z.number().optional(),
    notes: z.string().default(''),
})