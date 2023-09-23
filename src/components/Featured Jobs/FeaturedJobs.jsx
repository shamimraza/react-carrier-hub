import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        Featured Jobs{jobs.length}
      </h2>
      <p className="text-[#757575] font-medium text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
