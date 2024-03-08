import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Form.css";

const ReusableForm = ({ formTitle,fields, onSubmit,submitButtonText }) => {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    fields.forEach((field) => {
      initialData[field.name] = field.type === 'checkbox' ? false : '';
    });
    return initialData;
  });

  const handleChange = (event) => {
    const { name, value,type,checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,      
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    onSubmit(formData);
  };

  return (
    <div className="login-container">
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className="form-group" key={field.name}>
        <label htmlFor={field.name}>{field.label}:</label>
            <input              
              type={field.type}
              className="form-control"
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="login-btn">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReusableForm;