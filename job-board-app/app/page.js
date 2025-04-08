'use client'

import { useState } from 'react'
import jobsData from './data/jobs.json'
import JobCard from '@/app/components/JobCard'
import JobFilters from '@/app/components/Filter'

export default function HomePage() {
  const [filters, setFilters] = useState({ location: '', tag: '' })

  const handleFilterChange = ({ location, tag }) => {
    setFilters({ location, tag })
  }

  const filteredJobs = jobsData.filter((job) => {
    const matchesLocation = filters.location ? job.location === filters.location : true
    const matchesTag = filters.tag ? job.tags.includes(filters.tag) : true
    return matchesLocation && matchesTag
  })

  // Get all unique locations and tags
  const allLocations = [...new Set(jobsData.map((job) => job.location))]
  const allTags = [...new Set(jobsData.flatMap((job) => job.tags))]

  return (
    <div className="min-h-screen dark:from-[#000000] dark:via-[#0b2e22] dark:to-[#09281e] text-[#2f3e46] dark:text-white transition-colors duration-500">
      <main className="mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center tracking-tight text-black dark:text-white drop-shadow-md">
          Discover Your Next Role
        </h1>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters on the Left (1/4 width on large screens) */}
          <div className="lg:col-span-1">
            <JobFilters
              onFilterChange={handleFilterChange}
              availableLocations={allLocations}
              availableTags={allTags}
            />
          </div>
  
          {/* Job Cards (3/4 width on large screens) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <p className="text-center col-span-full text-gray-700 dark:text-gray-300">No jobs match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
  
}
