import { useId } from "react";
import { useJobs } from "@/hooks/use-jobs";
import { RiCloseFill } from "react-icons/ri";

export function JobFilterSection() {
  const id = useId();
  const filters = useJobs((state) => state.filters);
  const removeFilter = useJobs((state) => state.removeFilter);
  const clearFilters = useJobs((state) => state.clearFilters);

  if (filters.length === 0) {
    return <></>;
  }

  return (
    <section
      aria-labelledby={id}
      className="relative z-10 mt-[-2.25rem] py-5 px-10 max-w-[87.2%] mx-auto xl:max-w-[69.375rem] bg-neutral-50 rounded-md"
    >
      <h2 id={id} className="sr-only">
        Filters
      </h2>
      <div className="grid grid-cols-[1fr,2.375rem]">
        <ul className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <li key={filter}>
              <div className="h-8 flex items-center rounded bg-primary-300 w-max overflow-hidden">
                <span className="text-primary tracking-[0.123077px] ml-2 mr-[0.6875rem] font-bold">
                  {filter}
                </span>
                <button
                  onClick={() => removeFilter(filter)}
                  aria-label="remove filter"
                  className="w-8 h-full bg-primary hover:bg-neutral-800 grid place-items-center"
                >
                  <RiCloseFill className="w-5 h-5 text-neutral-50" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={() => clearFilters()}
          className="text-neutral-500 tracking-[0.123077px] font-bold hover:text-primary"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
