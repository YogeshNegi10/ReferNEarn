import React, { useState } from "react";
import ReferralModal from "./ReferralModal";
import "./LandingPage.css"; 
import image from "../assets/images/image.png";
import image2 from "../assets/images/image2.png";
import { ToastContainer, toast } from 'react-toastify';





const LandingPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  

  // Function to toggle modal visibility
  const handleModalToggle = () => setModalVisible(!modalVisible);

  return (
    <div className="landing-page  bg-[#eef5ff] ">
      <header className="header">
        <h1>How Do i Refer</h1>
        <ToastContainer />
        <p>Invite your friends to take amazing courses and earn rewards!</p>
      </header>
      <div className="banner my-4  hidden md:block">
        <img src={image} alt="" />
      </div>
      <div className="banner my-4 sm:block md:hidden  flex items-center justify-center ">
        <img src={image2} alt="" />
      </div>

      <div className="cta-section">
        <button className="refer-now-btn" onClick={handleModalToggle}>
          Refer Now
        </button>
      </div>

      {modalVisible && <ReferralModal onClose={handleModalToggle} />}
    </div>
  );
};

export default LandingPage;
