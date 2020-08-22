import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./JobModal.css";

const JobModal = (props) => {
  const { onHide, addJob } = props;

  // Manage card colors with built in bootstrap vairants
  const bootStrapCardVariants = [
    "Primary",
    "Secondary",
    "Danger",
    "Warning",
    "Info",
    "Light",
  ];

  // Set job card state
  const [identifier, setIdentifier] = useState(0);
  const [formData, updateFormData] = useState({
    company: "",
    job: "",
  });
  const [lastVariant, updateLastVariant] = useState("");

  // Creates a new job card
  const createJobCard = () => {
    if (!formData.company || !formData.job) {
      alert("Please fill out the appropriate fields.");
      return;
    }
    onHide();

    let variant = "";
    do {
      variant =
        bootStrapCardVariants[
          Math.floor(Math.random() * bootStrapCardVariants.length)
        ];
    } while (variant === lastVariant);

    const date = new Date();

    addJob(variant, identifier, date, formData.company, formData.job);

    setIdentifier((prevState) => prevState + 1);
    updateLastVariant(variant);
    updateFormData({
      company: "",
      job: "",
    });
  };

  // Handle form data in modal
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Allows form submission with press of the enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createJobCard();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
      >
        <Modal.Header
          style={{
            borderBottom: "none",
            fontSize: "35px",
            justifyContent: "center",
          }}
        >
          Add a job
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3" bsPrefix="custom-input-group">
            <FormControl
              placeholder="Company name"
              aria-label="Company name"
              name="company"
              bsPrefix="custom-input"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            ></FormControl>
          </InputGroup>
          <InputGroup className="mb-3" bsPrefix="custom-input-group">
            <FormControl
              placeholder="Job title"
              aria-label="Job title"
              name="job"
              bsPrefix="custom-input"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            ></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center", borderTop: "none" }}>
          <Button bsPrefix="custom-btn" block onClick={createJobCard}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobModal;
