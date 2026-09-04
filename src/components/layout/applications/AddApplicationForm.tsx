import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { applicationSchema } from '../../../lib/validation'
import type { ApplicationFormData } from '../../../types/application'
import { useApplicationsContext } from '../../../context/ApplicationsContext'

export default function AddApplicationForm() {
    const navigate = useNavigate()
    const { add } = useApplicationsContext()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<ApplicationFormData>({
            resolver: zodResolver(applicationSchema),
    })

    const onSubmit = (data: ApplicationFormData) => {
        add(data)
        navigate('/applications')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>
            <label className="mb-2 block text-sm font-medium">
            Company <span className="text-red-600">*</span>
            </label>

            <input
            {...register('company')}
            type="text"
            placeholder="e.g. Google"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.company && (
            <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Position <span className="text-red-600">*</span>
            </label>

            <input
            {...register('position')}
            type="text"
            placeholder="e.g. Frontend Developer"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.position && (
            <p className="mt-1 text-sm text-red-500">
                {errors.position.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Location <span className="text-red-600">*</span> 
            </label>

            <input
            {...register('location')}
            type="text"
            placeholder="e.g. Manila, Philippines"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.location && (
            <p className="mt-1 text-sm text-red-500">
                {errors.location.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Status <span className="text-red-600">*</span>
            </label>

            <select
            {...register('status')}
            className="w-full rounded-lg border px-4 py-2.5"
            >
            <option value="">Select status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Withdrawn">Withdrawn</option>
            </select>

            {errors.status && (
            <p className="mt-1 text-sm text-red-500">
                {errors.status.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Employment Type <span className="text-red-600">*</span>
            </label>

            <select
            {...register('employmentType')}
            className="w-full rounded-lg border px-4 py-2.5"
            >
            <option value="">Select employment type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            </select>

            {errors.employmentType && (
            <p className="mt-1 text-sm text-red-500">
                {errors.employmentType.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Date Applied <span className="text-red-600">*</span>
            </label>

            <input
            {...register('dateApplied')}
            type="date"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.dateApplied && (
            <p className="mt-1 text-sm text-red-500">
                {errors.dateApplied.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Job Link 
            </label>

            <input
            {...register('jobLink')}
            type="url"
            placeholder="https://example.com/job"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.jobLink && (
            <p className="mt-1 text-sm text-red-500">
                {errors.jobLink.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Salary <span className="text-red-600">*</span>
            </label>

            <input
            {...register('salary', { valueAsNumber: true })}
            type="number"
            placeholder="e.g. 30000"
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.salary && (
            <p className="mt-1 text-sm text-red-500">
                {errors.salary.message}
            </p>
            )}
        </div>

        <div>
            <label className="mb-2 block text-sm font-medium">
            Notes 
            </label>

            <textarea
            {...register('notes')}
            rows={4}
            placeholder="Add any notes about this application..."
            className="w-full rounded-lg border px-4 py-2.5"
            />

            {errors.notes && (
            <p className="mt-1 text-sm text-red-500">
                {errors.notes.message}
            </p>
            )}
        </div>

        <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
            Add Application
        </button>

        </form>
    )
}