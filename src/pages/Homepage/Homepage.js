import React, { useState } from "react";
import AddJob from "../../components/Button/AddJob";
import JobList from "../../components/Job/JobList";
import { ReactComponent as Wand } from "../../assets/magic-wand.svg";
import "./Homepage.css";

const Homepage = (props) => {
  const [jobCount, setJobCount] = useState(0);
  const [jobs, setJobs] = useState([]);

  const addJob = (variant, idx, timeStamp, company, job) => {
    setJobs([
      ...jobs,
      {
        variant: variant,
        idx: idx,
        timeStamp: timeStamp,
        company: company,
        job: job,
      },
    ]);
    setJobCount((prevState) => prevState + 1);
  };

  const deleteJob = (idx) => {
    console.log(idx);
    const jobList = [...jobs];
    const newJobList = jobList.filter((job) => job.idx !== idx);
    setJobs(newJobList);
    setJobCount((prevState) => prevState - 1);
  };

  return (
    <div className="homepage-container">
      <div className="header">
        <Wand className="wand"></Wand>
        <h3>WISHLIST</h3>
        <h6>{jobCount} JOBS</h6>
      </div>
      <AddJob
        buttonText={"+"}
        addJob={addJob}
        style={{ fontSize: 100 }}
      ></AddJob>
      <JobList jobs={jobs} deleteJob={deleteJob}></JobList>
    </div>
  );
};

export default Homepage;
