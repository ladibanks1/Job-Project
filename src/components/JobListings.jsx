import JobListing from "./JobListing";
import { useState, useEffect } from "react";
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "https://react-project-api.onrender.com/job?limit=3"
        : "https://react-project-api.onrender.com/job";
      try {
        const res = await fetch(apiUrl , {
          headers : {
            "x-api-key" : import.meta.env.VITE_API_KEY
          }
        });
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {jobs[0] === undefined ? (
                <h2>Jobs Loading</h2>
              ) : (
                jobs.map((job) => <JobListing job={job} key={job._id} />)
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
