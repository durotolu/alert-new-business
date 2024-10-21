import React, { useState } from "react";
import "../styles/Modal.css";
import AddBusinessForm from "./AddBusinessForm";

const Cards = ({setIsForm}: {setIsForm: (data: boolean) => void}) => {
  return (
    <div className="cards">
      <button className="card" onClick={() => setIsForm(true)}>
        <div>
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1693)">
              <rect x="0.5" width="48" height="48" rx="24" fill="#018DFF" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1476 14.7063C20.7531 14.7063 20.4333 15.0261 20.4333 15.4206V18.8494C20.4333 20.0329 19.4739 20.9922 18.2904 20.9922C17.107 20.9922 16.1476 20.0329 16.1476 18.8494V15.4206C16.1476 12.6592 18.3862 10.4206 21.1476 10.4206H27.8412C30.6026 10.4206 32.8412 12.6592 32.8412 15.4206V18.8494C32.8412 20.0329 31.8818 20.9922 30.6983 20.9922C29.5148 20.9922 28.5554 20.0329 28.5554 18.8494V15.4206C28.5554 15.0261 28.2356 14.7063 27.8412 14.7063H21.1476Z"
                fill="#CCE8FF"
              />
              <path
                d="M5.8302 21.7065C5.8302 20.1286 7.10939 18.8494 8.68735 18.8494H40.3011C41.8788 18.8494 43.1583 20.1286 43.1583 21.7065V46.4814C43.1583 48.0594 41.8788 49.3386 40.3011 49.3386H8.68735C7.10939 49.3386 5.8302 48.0594 5.8302 46.4814V21.7065Z"
                fill="#AEDAFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.8302 30.9344L22.896 35.9591C23.9496 36.2693 25.0702 36.2693 26.1239 35.9591L43.1583 30.9437V21.7065C43.1583 20.1286 41.8788 18.8494 40.3011 18.8494H8.68735C7.10939 18.8494 5.8302 20.1286 5.8302 21.7065V30.9344Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1693">
                <rect x="0.5" width="48" height="48" rx="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <div className="card_header">Merchant Account</div>
          <div>
            I want to pay suppliers and receive payment from buyers across the
            globe.
          </div>
        </div>
        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="24" height="24" rx="12" fill="#FAFAFB" />
            <path
              d="M10.7506 15.4997L14.25 12.0003L10.75 8.50033"
              stroke="#B4B4B4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <button className="card" onClick={() => setIsForm(true)}>
        <div>
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1694)">
              <rect x="0.5" width="48" height="48" rx="24" fill="#00CE72" />
              <path
                d="M22.1541 29.0452H26.8455C34.6187 29.0452 40.92 35.3466 40.92 43.1197V49.375H8.07959V43.1197C8.07959 35.3466 14.3809 29.0452 22.1541 29.0452Z"
                fill="#D7FFEC"
              />
              <path
                d="M31.537 19.6622C31.537 23.5488 28.3864 26.6995 24.4998 26.6995C20.6132 26.6995 17.4626 23.5488 17.4626 19.6622C17.4626 15.7757 20.6132 12.625 24.4998 12.625C28.3864 12.625 31.537 15.7757 31.537 19.6622Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1694">
                <rect x="0.5" width="48" height="48" rx="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <div className="card_header">Agent Account</div>
          <div>
            I want to help clients with global flights, hotels, tuition payments
            & accommodation.
          </div>
        </div>
        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="24" height="24" rx="12" fill="#FAFAFB" />
            <path
              d="M10.7506 15.4997L14.25 12.0003L10.75 8.50033"
              stroke="#B4B4B4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <button className="card" onClick={() => setIsForm(true)}>
        <div>
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1695)">
              <rect x="0.5" width="48" height="48" rx="24" fill="#FFBD1B" />
              <path
                d="M14.2261 24.8816V34.4906C14.2261 34.6735 14.328 34.8412 14.4904 34.9254L20.1222 37.8456C20.4482 38.0146 20.8373 37.778 20.8373 37.4108V27.9322L34.299 20.8309L27.6935 17.4031L14.2261 24.8816Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.125 23.0918V40.7877C6.125 41.1438 6.31828 41.4719 6.62977 41.6445L23.3286 50.9199C23.9124 51.2434 24.6207 51.2473 25.208 50.9305L42.3606 41.6771C42.6775 41.5062 42.875 41.1752 42.875 40.8151V22.8736C42.875 22.5195 42.6839 22.193 42.3752 22.0196L25.484 12.7504C25.1899 12.5852 24.8315 12.583 24.5353 12.7445L6.63544 22.232C6.32078 22.4036 6.125 22.7334 6.125 23.0918ZM14.2261 34.4906V24.8816L27.6935 17.4031L34.299 20.8309L20.8373 27.9322V37.4108C20.8373 37.778 20.4482 38.0146 20.1222 37.8456L14.4904 34.9254C14.328 34.8412 14.2261 34.6735 14.2261 34.4906Z"
                fill="#FFEEC6"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1695">
                <rect x="0.5" width="48" height="48" rx="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <div className="card_header">An Exporting Producer</div>
          <div>
            I want to export finished goods from Africa to a global audience
            using Ojah by Shiga.
          </div>
        </div>
        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="24" height="24" rx="12" fill="#FAFAFB" />
            <path
              d="M10.7506 15.4997L14.25 12.0003L10.75 8.50033"
              stroke="#B4B4B4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Cards;
