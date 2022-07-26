import create from "zustand";
import data from "@/assets/data.json";

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  filters: string[];
  addFilter: (value: string) => void;
  removeFilter: (value: string) => void;
}

function filterJobs(filters: string[], jobs: Job[]): Job[] {
  return jobs.filter((job) => {
    let flatten = Object.values(job);
    flatten = flatten.flat();
    return filters.every((filter) => flatten.includes(filter));
  });
}

export const useJobs = create<JobsState>((set, get) => ({
  jobs: data,
  filteredJobs: data,
  filters: [],

  addFilter: (value: string) => {
    const filters = [...get().filters];
    const index = filters.indexOf(value);
    if (index === -1) {
      filters.push(value);
      const filteredJobs = filterJobs(filters, [...get().jobs]);
      set((state) => ({ ...state, filters, filteredJobs }));
    }
  },
  removeFilter: (value: string) => {
    const filters = [...get().filters];
    const index = filters.indexOf(value);
    if (index >= 0) {
      filters.splice(index, 1);
      const filteredJobs = filterJobs(filters, [...get().jobs]);
      set((state) => ({ ...state, filters, filteredJobs }));
    }
  },
}));
