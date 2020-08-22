import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteJobModal from "../Modal/DeleteJobModal";
import "./Job.css";
import Moment from "react-moment";

const Job = (props) => {
  const { variant, idx, timeStamp, company, job, deleteJob } = props;

  const [isMouseInside, setisMouseInside] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setisMouseInside(true)}
      onMouseLeave={() => setisMouseInside(false)}
      className="card-container"
    >
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        className="mb-2"
        bsPrefix="card"
      >
        <Card.Body>
          <div className="delete-button-container">
            {isMouseInside ? (
              <Button
                size="sm"
                variant="outline-dark"
                onClick={() => {
                  setModalShow(true);
                  setisMouseInside(false);
                }}
              >
                Delete
              </Button>
            ) : null}
          </div>
          <Card.Title>{company}</Card.Title>
          <Card.Text>
            <h6>{job}</h6>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderTop: "none", textAlign: "right" }}>
          Added <Moment fromNow>{timeStamp}</Moment>
        </Card.Footer>
      </Card>
      <DeleteJobModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        deleteJob={deleteJob}
        idx={idx}
      ></DeleteJobModal>
    </div>
  );
};

export default Job;
