import { Header } from "./components/sections/header";
import { JobListSection } from "./components/sections/jobs-list";
import { JobFilterSection } from "./components/sections/job-filters";


function App() {
  return (
    <main>
      <Header />
      <JobFilterSection/>
      <JobListSection/>
    </main>
  );
}

export default App;
