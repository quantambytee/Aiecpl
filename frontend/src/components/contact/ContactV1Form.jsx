import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ContactV1Form = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        service: '',
        query: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
 
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
          const response = await axios.post(`${BASE_URL}/create-contact`, formData,{
            headers: {
                'Content-Type': 'application/json',
                // Add more headers here if needed
            }
          });
        //   console.log('Form submitted successfully:', response.data);
          if(response.data){
            swal({
                title: "Successfully Submitted!",
                icon: "success",
                buttons: {
                    confirm: true,
                  },
              });
             setFormData({
                name: '',
                email: '',
                number: '',
                service: '',
                query: '',
              })
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
      };
    
    return (
        <>
            <form className="contact-form" name="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="email">Your email address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="number">Your phone number</label>
                            <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} className="form-control no-arrows" placeholder="Phone Number" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="service">Service Required</label>
                            {/* <select id="service" name="service">
                                <option value="default" defaultValue>Service</option>
                                <option value="about">About</option>
                                <option value="contact">Contact</option>
                                <option value="team">Team</option>
                            </select> */}
                            <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} className="form-control no-arrows" placeholder="service Required" autoComplete='off' />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                        <label htmlFor="service">Query </label>
                            <textarea name="query" id="query" value={formData.query} onChange={handleChange} className="form-control" rows="4" placeholder="Let us know what you need." autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className="theme-btn contact-btn">Contact Us</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactV1Form;