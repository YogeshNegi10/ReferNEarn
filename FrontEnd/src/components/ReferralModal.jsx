import React, { useState } from "react";
import "./ReferralModal.css";
import axios from "axios";
import { toast } from 'react-toastify';

// This function is For The Sent Message / Notification !
const notify = (message) => toast(message);

const ReferralModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    course_Name: "",
    referrer_Name: "",
    referrer_email: "",
    referee_email: "",
    message: "",
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({
      ...formData,
      [name]: value,
    
    });
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      
  
    try {
      // Sending referral data to the backend
    
      const response = await axios.post("http://localhost:5000/referrals", {

        
    
        course_Name: formData.course_Name,
        referrer_Name: formData.referrer_Name,
        referrer_email: formData.referrer_email,
        referee_email: formData.referee_email,
        message: formData.message,

      });

      // alert("Thanks ! Your Referal is submitted");
    
      notify("Thanks ! Your Referal is submitted and Email Sent Successfully ! ");
      onClose(); // Close the modal after successful submission
    } catch (err) {
      console.error("Error submitting referral:", err);
      notify("There was an error submitting your referral.");
    }


  };

  return (
    <div className="modal-overlay ">

      <div className="modal">
   
   
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>REFER A COURSE TO SOMEONE</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              name="course_Name"
              value={formData.course_Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Referrer Name</label>
            <input
              type="text"
              name="referrer_Name"
              value={formData.referrer_Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Referrer Email</label>
            <input
              type="email"
              name="referrer_email"
              value={formData.referrer_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Referee email</label>
            <input
              type="email"
              name="referee_email"
              value={formData.referee_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Referral Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit Referral
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;

