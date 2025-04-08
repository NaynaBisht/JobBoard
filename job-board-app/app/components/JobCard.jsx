'use client';

import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="rounded-2xl p-6 transition-all duration-300 ease-in-out transform hover:scale-[1.015] cursor-pointer 
        bg-gradient-to-br from-[#d0f0e8] to-[#f0f9ff] text-[#1e293b] border border-[#b6e1c2]
        dark:from-[#0f1f17] dark:to-[#1a2e28] dark:text-white dark:border-[#2f4f4f] hover:shadow-2xl">
        
        {/* Title */}
        <h2 className="text-xl font-extrabold mb-2 text-[#0f172a] dark:text-white">
          {job.title}
        </h2>

        {/* Company + Location */}
        <p className="text-[#334155] dark:text-gray-300 mb-1">
          <span className="font-semibold">{job.company}</span> &bull; {job.location}
        </p>

        {/* Salary */}
        <p className="text-[#0d9488] dark:text-[#38bdf8] font-semibold mb-3">
          {job.salary}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#e0f2fe] text-[#1e40af] dark:bg-[#1e293b] dark:text-[#bae6fd] text-xs font-medium px-3 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
