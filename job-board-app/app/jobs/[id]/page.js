import { getJobById } from '@/utils/getJobs';
import Link from 'next/link';

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-[#2f3e46] dark:text-white transition-colors duration-500">
        <h2 className="text-2xl font-bold">Job not found</h2>
        <Link href="/" className="text-blue-600 dark:text-blue-300 underline mt-4 block">
          ← Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6 rounded-xl mt-4
      bg-gradient-to-br from-[#d0f0e8] to-[#f0f9ff] text-[#1e293b] border border-[#b6e1c2]
      dark:from-[#0f1f17] dark:to-[#1a2e28] dark:text-white dark:border-[#2f4f4f]
      transition-colors duration-500">


      {/* Job Title */}
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>

      {/* Company & Location */}
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        {job.company} — {job.location}
      </p>

      {/* Salary */}
      <p className="text-green-700 dark:text-green-300 mb-4">{job.salary}</p>

      {/* Tags */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Tags</h2>
        <div className="flex gap-2 mt-2 flex-wrap">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-sky-600 dark:bg-sky-700 text-white text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>


      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-[#2f3e46] dark:text-gray-300">{job.description}</p>
      </div>

      {/* Apply Button */}
      <button className="bg-sky-600 dark:bg-sky-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-sky-700 dark:hover:bg-sky-600 transition-colors duration-300">
        Apply Now
      </button>

      {/* Back Link */}
      <div className="mt-6">
        <Link href="/" className="text-blue-600 dark:text-green-300 underline">
          ← Back to Listings
        </Link>
      </div>
    </main>
  );
}
