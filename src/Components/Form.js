import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Form.css";

const ReusableForm = ({ formTitle,fields, onSubmit,submitButtonText,initialData }) => {
    const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    const DEFAULT_DATE = "2000-01-01";
    fields.forEach((field) => {
      let initialValue;
      switch (field.type) {
        case 'checkbox':
            initialValue = initialData[field.name] !== undefined ? initialData[field.name] : false;
            break;
        case 'number':
            initialValue = 0;
            break;
        case 'date':
            const date = initialData[field.name] !== undefined ? new Date(initialData[field.name]).toISOString().split('T')[0] : new Date(DEFAULT_DATE).toISOString();
            initialFormData[field.name] = date;
            return;
        default:
      }
      initialFormData[field.name] = initialData[field.name] || initialValue;
    });
    return initialFormData;
  });

  const handleChange = (event) => {
    const { name, value,type,checked } = event.target;
    let parsedValue = value;

    if(type === 'number'){
      let parsedNo = parseInt(value,10);
      parsedValue = !isNaN(parsedNo) ? parsedNo : 0;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,      
      [name]: type === 'checkbox' ? checked : parsedValue
    }));
  };

  const handleSubmit = async (event) => {
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
        {field.type === 'checkbox' ? (
            <input              
              type={field.type}
              className="form-control"
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              checked={formData[field.name]}
              onChange={handleChange}
            />
        ) :
        (
          <input              
              type={field.type}
              className="form-control"
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
        )
}
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