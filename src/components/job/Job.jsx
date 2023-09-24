import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
    id,
  } = job;
  console.log(job);
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-5">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-3">
          <button className="px-5 py-2 font-bold border rounded text-[#7E90FE] border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold border rounded text-[#7E90FE] border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <h2 className="flex mr-3 text-[#757575]">
            <MdLocationOn className="text-2xl"></MdLocationOn>
            {location}
          </h2>
          <h2 className="flex mr-3 text-[#757575]">
            <HiOutlineCurrencyDollar className="text-2xl "></HiOutlineCurrencyDollar>
            Salary : {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
