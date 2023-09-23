import FeaturedJobs from "../../Featured Jobs/FeaturedJobs";
import JobCategory from "../../Job Category/JobCategory";
import Banner from "../../banner/Banner";

const Home = () => {
  return (
    <div>
      <h2>this is home</h2>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
