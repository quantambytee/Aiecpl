import React,{useState} from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ApplyFormModal = ({ openModal, closeModal }) => {

  const [formData, setFormData] = useState({
    gender: '',
    dob: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    state: '',
    nationality: '',
    educationLevel: '',
    englishLevel: '',
    workExperience: '',
    annualBudget: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here, you can access form data from formData state
    console.log(formData);
    try {
      const response = await axios.post(`${BASE_URL}/create-ApplyForm`, formData,{
        headers: {
            'Content-Type': 'application/json',
            // Add more headers here if needed
        }
      });
    //   console.log('Form submitted successfully:', response.data);
      if(response.data){
        swal({
            title: "Thank You For Applying Our Team Will Contact You Soon!",
            icon: "success",
            buttons: {
                confirm: true,
              },
          });
         setFormData({
          gender: '',
          dob: '',
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          state: '',
          nationality: '',
          educationLevel: '',
          englishLevel: '',
          workExperience: '',
          annualBudget: '',
          message: ''
          })
          closeModal();
      }
     
      // Handle success here (e.g., showing a success message)
    } catch (error) {
      console.error('Form submission error:', error);
      swal({
        title: `'Form submission error:', ${error}`,
        icon: "error",
        buttons: {
            confirm: true,
          },
      });
      // Handle errors here (e.g., showing an error message)
    }
    // After handling submission, you can close the modal
    closeModal();
  };
  return (
    <>
      <Modal show={openModal} onHide={closeModal} dialogClassName="custom-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body className="modal-body-custom">
          <Row>
            <Col>
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleChange} value={formData.gender}>
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
                <Form.Control type="date" name="dob" onChange={handleChange} value={formData.dob} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} value={formData.firstName} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} value={formData.lastName} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={formData.email} required />
          </Form.Group>

          <Form.Group controlId="formMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="tel" name="mobile" placeholder="Enter mobile number" onChange={handleChange} value={formData.mobile} required />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" placeholder="Enter state" onChange={handleChange} value={formData.state} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formNationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="text" name="nationality" placeholder="Enter nationality" onChange={handleChange} value={formData.nationality} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formEducationLevel">
                <Form.Label>Education Level</Form.Label>
                <Form.Control as="select" name="educationLevel" onChange={handleChange} value={formData.educationLevel} required>
                  <option>Choose...</option>
                  <option>Secondary School Diploma</option>
                  <option>College Diploma</option>
                  <option>Bachelor Degree</option>
                  <option>Master Degree</option>
                  <option>MBA</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEnglishLevel">
                <Form.Label>English Speaking Level</Form.Label>
                <Form.Control as="select" name="englishLevel" onChange={handleChange} value={formData.englishLevel} required>
                  <option>N/A</option>
                  <option>A1-Beginner</option>
                  <option>A2-Elementary</option>
                  <option>B1-Intermediate</option>
                  <option>B2-Upper-Intermediate</option>
                  <option>C1-Advanced</option>
                  <option>C2-Proficient</option>
                  <option>Native</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formWorkExperience">
            <Form.Label>Work Experience (Years)</Form.Label>
            <Form.Control type="number" name="workExperience" placeholder="Enter years of experience" onChange={handleChange} value={formData.workExperience} required />
          </Form.Group>

          <Form.Group controlId="formAnnualBudget">
            <Form.Label>Annual Budget for Studies</Form.Label>
            <Form.Control type="text" name="annualBudget" placeholder="Enter budget" onChange={handleChange} value={formData.annualBudget} required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Any Other Query</Form.Label>
            <Form.Control as="textarea" rows={7} name="message" placeholder="Enter your message" onChange={handleChange} value={formData.message} />
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
