import { useJobs } from "@/hooks/use-jobs";
import { useId } from "react";
import { JobCard } from "../cards/job";

export function JobListSection() {
  const filteredJobs = useJobs((state) => state.filteredJobs);
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      className="mt-8 pb-8 max-w-[87.2%] mx-auto xl:max-w-[69.375rem] xl:mt-[4.75rem] xl:pb-[7.5rem]"
    >
      <h2 className="sr-only" id={id}>
        List of job posts
      </h2>
      <ul className="flex flex-col gap-4 xl:gap-6">
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </section>
  );
}
