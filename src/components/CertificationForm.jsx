import React, { useState } from 'react';
import './CertificationForm.css'; // CSS 파일을 임포트

const CertificationInput = ({ certification, index, handleChange, deleteCertification, showDeleteButton }) => (
  <div className="certification-section">
    <table key={index}>
      <tbody>
        <tr>
          <th><label htmlFor={`name-${index}`}>자격증명</label></th>
          <td>
            <input
              id={`name-${index}`}
              name="name"
              value={certification.name}
              onChange={(e) => handleChange(index, e)}
              placeholder="자격증명을 입력하세요"
              className="full-width"
            />
          </td>
        </tr>
        <tr>
          <th><label htmlFor={`issuingOrganization-${index}`}>발급기관</label></th>
          <td>
            <input
              id={`issuingOrganization-${index}`}
              name="issuingOrganization"
              value={certification.issuingOrganization}
              onChange={(e) => handleChange(index, e)}
              placeholder="발급기관을 입력하세요"
              className="full-width"
            />
          </td>
        </tr>
        <tr>
          <th><label htmlFor={`issueDate-${index}`}>발급일</label></th>
          <td>
            <input
              id={`issueDate-${index}`}
              name="issueDate"
              value={certification.issueDate}
              onChange={(e) => handleChange(index, e)}
              placeholder="발급일을 입력하세요"
              className="full-width"
            />
          </td>
        </tr>
      </tbody>
    </table>
    {showDeleteButton && (
      <button type="button" onClick={() => deleteCertification(index)} className="deleteButton">Delete</button>
    )}
  </div>
);

const CertificationForm = (props) => {
  const [certifications, setCertifications] = useState([{
    name: '',
    issuingOrganization: '',
    issueDate: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newCertifications = [...certifications];
    newCertifications[index][name] = value;
    setCertifications(newCertifications);

    // props.setCertificationForm를 사용하여 부모 컴포넌트의 상태 업데이트
    props.setCertificationForm(newCertifications);
  };

  const addCertification = () => {
    const newCertifications = [...certifications, {
      name: '',
      issuingOrganization: '',
      issueDate: ''
    }];
    setCertifications(newCertifications);

    // props.setCertificationForm를 사용하여 부모 컴포넌트의 상태 업데이트
    props.setCertificationForm(newCertifications);
  };

  const deleteCertification = (index) => {
    if (certifications.length > 1) {
      const newCertifications = certifications.slice();
      newCertifications.splice(index, 1);
      setCertifications(newCertifications);

      // props.setCertificationForm를 사용하여 부모 컴포넌트의 상태 업데이트
      props.setCertificationForm(newCertifications);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certifications);
  };

  return (
    <form onSubmit={handleSubmit} className="certificationForm">
      {certifications.map((certification, index) => (
        <CertificationInput
          key={index}
          index={index}
          certification={certification}
          handleChange={handleChange}
          deleteCertification={deleteCertification}
          showDeleteButton={certifications.length > 1}
        />
      ))}
      <button type="button" onClick={addCertification} className="addButton">Add</button>
    </form>
  );
};

export default CertificationForm;
