import React from 'react';
import './ExperienceForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// ExperienceForm 컴포넌트 정의
const ExperienceForm = ({ experienceForm = [], readOnly }) => {
  return (
    <div>
      <form className="experienceForm">
        <h2>보유역량</h2>
        <table>
          <tbody>
            {experienceForm.map((experience) => (
              <React.Fragment key={experience.id || experience.company}>
                <tr>
                  <th>회사명</th>
                  <td colSpan="5">
                    <input
                      name="company"
                      value={experience.company}
                      placeholder="회사명"
                      className="companyInput"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th>재직 기간</th>
                  <td colSpan="5">
                    <DatePicker
                      selected={experience.startDate ? new Date(experience.startDate) : null}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="입사일"
                      className="datePicker"
                      showPopperArrow={false}
                      disabled
                    />
                    <DatePicker
                      selected={experience.endDate ? new Date(experience.endDate) : null}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="퇴사일"
                      className="datePicker"
                      showPopperArrow={false}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <th>직급</th>
                  <td colSpan="2">
                    <input
                      name="position"
                      value={experience.position}
                      className="full-width"
                      readOnly
                    />
                  </td>
                  <th>직책</th>
                  <td colSpan="2">
                    <input
                      name="role"
                      value={experience.role}
                      className="full-width"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th>재직 여부</th>
                  <td colSpan="5">
                    <input
                      name="employmentStatus"
                      value={experience.employmentStatus}
                      className="full-width"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th>담당업무</th>
                  <td colSpan="5">
                    <textarea
                      name="description"
                      value={experience.description}
                      placeholder="담당 업무"
                      className="full-width"
                      readOnly
                    ></textarea>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ExperienceForm;
