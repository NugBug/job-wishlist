import React, { useState } from "react";
import { Button } from "react-bootstrap";
import JobModal from "../Modal/JobModal";
import "./AddJob.css";

const AddJobButton = (props) => {
  const { buttonText, addJob } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="button-container">
      <Button
        color="primary"
        variant="outline-dark"
        size="lg"
        onClick={() => setModalShow(true)}
        block
      >
        {buttonText}
      </Button>
      <JobModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addJob={addJob}
      ></JobModal>
    </div>
  );
};

export default AddJobButton;
