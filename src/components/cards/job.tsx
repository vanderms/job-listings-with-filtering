import { Job } from "@/hooks/use-jobs";
import { useJobs } from "@/hooks/use-jobs";

const Button: React.FC<{ children: string; raw: boolean }> = ({ children, raw }) => {
  const addFilter = useJobs((state) => state.addFilter);
  const value = children.trim();
  return (
    <button
      onClick={() => addFilter(children)}
      className={
        raw
          ? undefined
          : `w-max h-8 px-2 rounded bg-primary-300 text-primary font-bold tracking-[-0.123077px] hover:bg-primary hover:text-neutral-50`
      }
    >
      {children}
    </button>
  );
};

export const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <article
      className={`mt-6 px-6 pb-6 rounded-md 
        bg-neutral-50 grid grid-cols-1
        xl:grid-cols-[5.5rem,18.75rem,1fr] xl:px-10 xl:pt-8 xl:pb-[1.9375rem] xl:gap-6 xl:mt-0
        ${job.featured ? "border-l-[0.3125rem] border-primary " : ""}
        shadow-[0px_15px_20px_-5px_rgba(13,113,130,0.15)]
        `}
    >
      <div className="w-12 h-12 [transform:translateY(-1.5rem)] xl:w-[5.5rem] xl:h-[5.5rem] xl:[transform:unset]">
        <img src={job.logo} alt="" />
      </div>
      <div>
        <div className="mt-[-1rem] flex gap-[0.9375rem] items-center xl:mt-0">
          <p className="font-bold text-primary text-[0.8125rem] md:text-[1.125rem] leading-[1.5rem]">
            {job.company}
          </p>
          <div className="flex gap-2">
            {job.new && (
              <p className="w-[3.1875rem] h-[1.5rem] grid place-items-center rounded-full bg-primary">
                <span className="text-neutral-50  text-[0.875rem] font-bold"> NEW!</span>
              </p>
            )}
            {job.featured && (
              <p className="w-[4.9375rem] h-[1.5rem] grid place-items-center rounded-full bg-neutral-800 ">
                <span className="text-neutral-50 text-[0.875rem] font-bold ">FEATURED</span>
              </p>
            )}
          </div>
        </div>
        <div>
          <h3
            className={`mt-[0.625rem] text-neutral-800 hover:text-primary cursor-pointer font-bold 
            text-[0.9375rem] leading-[1.5rem] md:text-[1.375rem]`}
          >
            <Button raw={true}>{job.position}</Button>
          </h3>
        </div>
        <div
          className={`mt-[0.4375rem] flex gap-2.5 text-neutral-500 text-[1rem] leading-[1.5rem] 
        items-center md:text-[1.125rem] xl:gap-4`}
        >
          <span>{job.postedAt}</span>
          <span className="text-[0.5rem]"> &#9679;</span>
          <span>{job.contract}</span>
          <span className="text-[0.5rem]"> &#9679;</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="my-4 w-full h-0 border border-[#B7C4C4] xl:hidden"></div>
      <div className="flex gap-4 flex-wrap self-center justify-self-end">
        {[job.role, job.level, ...job.languages, ...job.tools].map((filter) => (
          <Button raw={false} key={filter}>
            {filter}
          </Button>
        ))}
      </div>
    </article>
  );
};
