import React, { useState } from 'react';

const CertificationForm = () => {
  const [certifications, setCertifications] = useState([{
    name: '',
    issuingOrganization: '',
    issueDate: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newCertifications = certifications.slice();
    newCertifications[index][name] = value;
    setCertifications(newCertifications);
  };

  const addCertification = () => {
    setCertifications([...certifications, {
      name: '',
      issuingOrganization: '',
      issueDate: ''
    }]);
  };

  const deleteCertification = (index) => {
    if (certifications.length > 1) {
      const newCertifications = certifications.slice();
      newCertifications.splice(index, 1);
      setCertifications(newCertifications);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certifications);
  };

  return (
    <form onSubmit={handleSubmit}>
      {certifications.map((certification, index) => (
        <div key={index}>
          <input
            name="name"
            value={certification.name}
            onChange={(e) => handleChange(index, e)}
            placeholder="자격증명"
          />
          <input
            name="issuingOrganization"
            value={certification.issuingOrganization}
            onChange={(e) => handleChange(index, e)}
            placeholder="발급기관"
          />
          <input
            name="issueDate"
            value={certification.issueDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="발급일"
          />
          {certifications.length > 1 && (
            <button type="button" onClick={() => deleteCertification(index)}>Delete</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addCertification}>Add</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CertificationForm;