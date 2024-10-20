import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBusiness } from "../store/businessSlice";
import { useNavigate } from "react-router-dom";

const AddBusinessForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    industry: "",
    size: "",
    volume: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addBusiness({ ...formData, id: Date.now().toString() }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-business-form">
      <div className="field">
        <label>
          Where is your business located <span>*</span>
        </label>
        <select id="businessType">
          <option value="" disabled>
            Select Location
          </option>
          <option value="Nigerian">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1806)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H18V18H0V0Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9988 0H18V18H11.9988V0ZM0 0H6.00117V18H0V0Z"
                  fill="#008753"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1806">
                  <rect width="18" height="18" rx="9" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Nigerian
          </option>
          <option value="Other">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0999 9.00002C17.0999 13.4735 13.4734 17.1 8.9999 17.1M17.0999 9.00002C17.0999 4.52652 13.4734 0.900024 8.9999 0.900024M17.0999 9.00002H0.899902M8.9999 17.1C4.5264 17.1 0.899902 13.4735 0.899902 9.00002M8.9999 17.1C10.8461 17.1 12.3428 13.4735 12.3428 9.00002C12.3428 4.52652 10.8461 0.900024 8.9999 0.900024M8.9999 17.1C7.15369 17.1 5.65704 13.4735 5.65704 9.00002C5.65704 4.52652 7.15369 0.900024 8.9999 0.900024M0.899902 9.00002C0.899902 4.52652 4.5264 0.900024 8.9999 0.900024"
                stroke="#B4B4B4"
                stroke-width="1.6"
              />
            </svg>
            Other Countries
          </option>
        </select>
      </div>
      <div className="field">
        <label>
          Business Name <span>*</span>
        </label>
        <div>
          <input
            placeholder="Business Name"
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <div className="name_bottom">
            Use the registered business name on your document
          </div>
        </div>
      </div>
      <div className="field">
        <label>
          Business Industry <span>*</span>
        </label>
        <input type="text" name="industry" onChange={handleChange} required />
      </div>
      <div className="inputs_bottom">
        <div className="field">
          <label>
            Company Size <span>*</span>
          </label>
          <input
            placeholder="Business Name"
            type="text"
            name="size"
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>
            Estimated Annual Volume <span>*</span>
          </label>
          <input
            placeholder="Business Name"
            type="text"
            name="volume"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit">Add Business</button>
    </form>
  );
};

export default AddBusinessForm;
