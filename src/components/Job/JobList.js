import React from "react";
import Job from "./Job";
import "./JobList.css";

const JobList = (props) => {
  const { jobs, deleteJob } = props;

  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <Job
          variant={job.variant}
          idx={job.idx}
          timeStamp={job.timeStamp}
          company={job.company}
          job={job.job}
          deleteJob={deleteJob}
        />
      ))}
    </div>
  );
};

export default JobList;
