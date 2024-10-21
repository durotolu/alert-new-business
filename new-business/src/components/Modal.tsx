import React, { useState } from "react";
import "../styles/Modal.css";
import AddBusinessForm from "./AddBusinessForm";
import Cards from "./Cards";

const Modal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [isForm, setIsForm] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <div className="modal_header_right">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="4.44444" fill="#111111" />
                  <g filter="url(#filter0_d_582_983)">
                    <path
                      d="M15.7199 4.59273L15.7151 4.44287L12.4873 3.90625L12.4986 4.13347C12.6195 6.49908 12.4986 8.32326 12.1344 9.7075C11.6381 11.5881 10.6793 12.6113 9.28213 12.7499C8.75358 12.8015 8.19762 12.6307 7.75931 12.281C7.379 11.9571 7.1679 11.5365 7.1115 10.9951L7.10828 10.9789C7.09861 10.9306 7.09377 10.8742 7.09377 10.8065V10.5954C7.09377 10.025 7.23236 9.51573 7.5047 9.08547C7.77703 8.6536 8.15895 8.31197 8.63916 8.07187C9.13549 7.81887 9.70272 7.68995 10.328 7.68995C10.3602 7.68995 10.4907 7.6964 10.6341 7.70446C10.8743 7.71735 11.1127 7.76569 11.3416 7.84787L11.6751 7.96712L11.7235 7.77052C11.8395 7.30159 11.9136 6.70857 11.9314 6.09944C11.9475 5.55961 11.9185 5.06005 11.8524 4.76355L11.8331 4.6733L11.7477 4.63624C11.211 4.40097 10.5697 4.36552 10.2361 4.36552C9.38849 4.36552 8.56826 4.51699 7.79637 4.81511C7.02287 5.10195 6.32189 5.52576 5.70792 6.07527C5.10685 6.62639 4.62663 7.29676 4.27695 8.07187C3.92726 8.83086 3.75 9.69944 3.75 10.647C3.75 11.659 3.97238 12.592 4.4107 13.4187V13.4219C4.86352 14.2373 5.48232 14.8932 6.24615 15.3702C7.01481 15.8617 7.885 16.1114 8.82931 16.1114C9.44167 16.1114 10.241 16.0808 10.9983 15.8471C12.6581 15.3347 13.7894 14.3582 14.5597 12.7741C15.4589 10.9258 15.8375 8.25074 15.7183 4.59273H15.7199Z"
                      fill="white"
                    />
                    <path
                      d="M15.5168 12.0637L15.4604 12.2345C15.1188 13.2787 14.7175 14.1312 13.8667 14.8966L13.6378 15.1029L15.7392 15.8458L16.25 12.2909L15.5152 12.0637H15.5168Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_582_983"
                      x="3.23196"
                      y="3.49182"
                      width="13.5361"
                      height="13.2413"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.103607" />
                      <feGaussianBlur stdDeviation="0.259018" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_582_983"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_582_983"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                Add a Business
              </div>
              <button onClick={closeModal}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="18" fill="#FAFAFA" />
                  <path
                    d="M22.5 22.5L17.9998 17.9998M17.9998 17.9998L13.5005 13.5005M17.9998 17.9998L22.4995 13.5M17.9998 17.9998L13.5 22.4995"
                    stroke="#99999C"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="form">
              {isForm ? (
                <>
                  <h2>Provide some info about your business</h2>
                  <AddBusinessForm setIsForm={setIsForm} closeModal={closeModal} />
                </>
              ) : (
                <>
                  <h2>What kind of account do you want to open?</h2>
                  <p className="note">
                    You can always add another account later on.
                  </p>
                  <Cards setIsForm={setIsForm} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
