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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certifications);
  };

  return (
    <form onSubmit={handleSubmit}>
      {certifications.map((certification, index) => (
        <div key={index}>
          <input name="name" value={certification.name} onChange={(e) => handleChange(index, e)} placeholder="자격증명" />
          <input name="issuingOrganization" value={certification.issuingOrganization} onChange={(e) => handleChange(index, e)} placeholder="발급기관" />
          <input name="issueDate" value={certification.issueDate} onChange={(e) => handleChange(index, e)} placeholder="발급일" />
        </div>
      ))}
      <button type="button" onClick={addCertification}>Add</button>
    </form>
  );
};

export default CertificationForm;