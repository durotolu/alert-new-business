import { useState } from "react";
import Logo from "../icons/logo";
import "../styles/Sidebar.css";
import Modal from "./Modal";

const BusinessCard = () => {
  const [isAddBusinessButton, setIsAddBusinessButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="business_card">
      <div className="business_card_top">
        <div>
          <Logo />
        </div>
        <div className="business_info">
          <div className="business_name">Payshiga Technologies</div>
          <div className="business_id">Business ID: 09387465</div>
        </div>
        <button onClick={() => setIsAddBusinessButton((prev) => !prev)}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7101 5.18159L9.02846 2.5L6.34716 5.1813M11.648 12.8184L8.9664 15.5L6.2851 12.8187"
              stroke="#6F6F6F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isAddBusinessButton ? (
        <>
          <div className="divider">
            <svg
              width="216"
              height="8"
              viewBox="0 0 216 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4H216" stroke="#F5F5F5" />
            </svg>
          </div>
          <button className="business_card_bottom" onClick={() => setIsOpen(true)}>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="42" rx="8" fill="#FAFAFA" />
              <path
                d="M21 14.874V27.1259M14.874 21H27.126"
                stroke="#B4B4B4"
                strokeWidth="2.8875"
                strokeLinecap="round"
              />
            </svg>
            Add a Business
          </button>
        </>
      ) : null}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default BusinessCard;
