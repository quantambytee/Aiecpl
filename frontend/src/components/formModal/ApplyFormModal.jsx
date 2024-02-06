import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';


const ApplyFormModal = ({ openModal, closeModal }) => {
  return (
    <>
      <Modal show={openModal} onHide={closeModal} dialogClassName="custom-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body className="modal-body-custom">
            <Row>
              <Col>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDOB">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" name="dob" placeholder="Date of Birth" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter mobile number" required />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter state" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formNationality">
                  <Form.Label>Nationality</Form.Label>
                  <Form.Control type="text" placeholder="Enter nationality" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formEducationLevel">
                  <Form.Label>Education Level</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Secondary School Diploma</option>
                    <option>College Diploma</option>
                    <option>Bachlor Degree</option>
                    <option>Master Degree</option>
                    <option>MBA</option>
                    <option>Others</option>
                    {/* Add options for education level here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEnglishLevel">
                  <Form.Label>English Speaking Level</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>N/A</option>
                    <option>A1-Beginner</option>
                    <option>A2-Elementry</option>
                    <option>B1-Intermediate</option>
                    <option>B1-Intermediate</option>
                    <option>B1-Intermediate</option>
                    <option>B2-Upper-Intermediate</option>
                    <option>c1-Advanced</option>
                    <option>c2-Proficent</option>
                    <option>Native</option>
                    {/* Add options for English speaking level here */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formWorkExperience">
              <Form.Label>Work Experience (Years)</Form.Label>
              <Form.Control type="number" placeholder="Enter years of experience" required />
            </Form.Group>

            <Form.Group controlId="formAnnualBudget">
              <Form.Label>Annual Budget for Studies</Form.Label>
              <Form.Control type="text" placeholder="Enter budget" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Any Other Query</Form.Label>
              <Form.Control as="textarea" rows={7} placeholder="Enter your message" /> {/* Increased rows from 3 to 5 */}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="modal-footer-custom">
            <Button variant="outline-secondary" onClick={closeModal} className="modal-close-btn">
              Close
            </Button>
            <Button variant="primary" type="submit" className="modal-submit-btn">
              Submit Application
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ApplyFormModal;
