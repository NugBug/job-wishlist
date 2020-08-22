import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./DeleteJobModal.css";

const DeleteJobModal = (props) => {
  const { onHide, deleteJob, idx } = props;

  const handleDelete = () => {
    onHide();
    deleteJob(idx);
  };

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
      >
        <Modal.Body className="modal-body">
          <h3>Delete Job</h3>
          <h5>Are you sure you want to delete this job?</h5>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center", borderTop: "none" }}>
          <Button bsPrefix="custom-btn" onClick={handleDelete}>
            Delete
          </Button>
          <Button
            bsPrefix="custom-btn"
            style={{ background: "gray" }}
            block
            onClick={onHide}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteJobModal;
