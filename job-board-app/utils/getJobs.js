export async function getJobById(id) {
  const jobsData = await import('@/app/data/jobs.json');
  const jobs = jobsData.default;
  return jobs.find((j) => j.id === id);
}
