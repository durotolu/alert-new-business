import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBusiness } from "../store/businessSlice";
import { useNavigate } from "react-router-dom";

const AddBusinessForm = ({
  setIsForm,
  closeModal,
}: {
  setIsForm: (data: boolean) => void;
  closeModal: () => void;
}) => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    industry: "",
    size: "",
    volume: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const isValid =
      formData.type !== "" &&
      formData.name !== "" &&
      formData.industry !== "" &&
      formData.size !== "" &&
      formData.volume !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data
    dispatch(addBusiness({ ...formData, id: Date.now().toString() }));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="add-business-form">
      <div className="field">
        <label>
          Where is your business located <span>*</span>
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Location</option>
          <option value="Nigerian">Nigerian</option>
          <option value="Other">Other Countries</option>
        </select>
      </div>

      <div className="field">
        <label>
          Business Name <span>*</span>
        </label>
        <input
          placeholder="Business Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="name_bottom">
          Use the registered business name on your document
        </div>
      </div>

      <div className="field">
        <label>
          Business Industry <span>*</span>
        </label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        >
          <option value="">Select Industry</option>
          <option value="Financial technology">Financial technology</option>
          <option value="Ecommerce">Ecommerce</option>
        </select>
      </div>

      <div className="inputs_bottom">
        <div className="field">
          <label>
            Company Size <span>*</span>
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            <option value="1-100">1-100</option>
            <option value="101-200">101-200</option>
          </select>
        </div>

        <div className="field">
          <label>
            Estimated Annual Volume <span>*</span>
          </label>
          <select
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
          >
            <option value="">Select Volume</option>
            <option value="$1,000 - $10,000">$1,000 - $10,000</option>
            <option value="$10,001 - $50,000">$10,001 - $50,000</option>
          </select>
        </div>
      </div>

      <div className="buttons">
        <button type="button" className="back" onClick={() => setIsForm(false)}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.27612 8L7.94766 3M3.27612 8L7.94766 13M3.27612 8H13.7236"
              stroke="#99999C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <button className="submit" type="submit" disabled={!isFormValid}>
          Create Business
        </button>
      </div>
    </form>
  );
};

export default AddBusinessForm;
