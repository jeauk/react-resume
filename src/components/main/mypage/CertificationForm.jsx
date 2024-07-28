import React from 'react';
import './CertificationForm.css'; // CSS 파일을 임포트

const CertificationForm = ({ certificationForm = [] }) => {
  return (
    <div className="certificationForm">
      {certificationForm.map((certification, index) => (
        <div className="certification-section" key={index}>
          <table>
            <tbody>
              <tr>
                <th>자격증명</th>
                <td>
                  <input
                    name="name"
                    value={certification.name}
                    className="full-width"
                  />
                </td>
              </tr>
              <tr>
                <th>발급기관</th>
                <td>
                  <input
                    name="issuingOrganization"
                    value={certification.issuingOrganization}
                    className="full-width"
                  />
                </td>
              </tr>
              <tr>
                <th>발급일</th>
                <td>
                  <input
                    name="issueDate"
                    value={certification.issueDate}
                    className="full-width"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CertificationForm;
