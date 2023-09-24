import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./JobDetails.css";
import { saveJobApplication } from "../Utility/LocalStroage";

const JobDetails = () => {
  // console.log("job details", job);

  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const jobsData = jobs.find((job) => job.id === idInt);
  console.log("paica ki na", jobsData);

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("you have Applied successFully");
  };
  return (
    <div>
      <h2 className="text-center text-3xl p-8 my-10 font-bold">
        job details{id}
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2>
            <span className="font-semibold">Job Description</span> :{" "}
            {jobsData.job_description}
          </h2>
          <h2 className="mt-3">
            <span className="font-semibold">Job Responsibility : </span>{" "}
            {jobsData.job_responsibility}
          </h2>
          <h2 className="mt-3">
            <span className="font-semibold">Educational Requirements : </span>
            <br /> {jobsData.job_title}
          </h2>
          <h2 className="mt-3">
            <span className="font-semibold">Experiences :</span> <br />{" "}
            {jobsData.experiences}
          </h2>
        </div>
        <div className="jobDetails p-4 my-3">
          <h2 className="text-2xl">Job Details</h2>
          <hr />
          <h3>Salary : {jobsData.salary}</h3>
          <h3>Job Title : {jobsData.job_title}</h3>
          <h1 className="text-2xl my-3">Contact Information</h1>
          <hr />
          <h1>Phone : {jobsData.contact_information.phone}</h1>
          <h1>Email : {jobsData.contact_information.email}</h1>
          <h1>Address : {jobsData.contact_information.address}</h1>
          <button
            onClick={handleApplyJob}
            className="btn btn-primary my-6 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
