import React, { useState } from 'react';
import './ExperienceForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    role: '',
    startDate: null,
    endDate: null,
    employmentStatus: '',
    description: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.slice();
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const handleDateChange = (index, date, name) => {
    const newExperiences = experiences.slice();
    newExperiences[index][name] = date;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      role: '',
      startDate: null,
      endDate: null,
      employmentStatus: '',
      description: ''
    }]);
  };

  const deleteExperience = (index) => {
    if (experiences.length > 1) {
      const newExperiences = experiences.slice();
      newExperiences.splice(index, 1);
      setExperiences(newExperiences);
    }
  };

  const positions = ['사원', '주임', '계장', '대리', '과장', '차장', '부장', '감사', '이사', '상무', '전무', '부사장', '사장'];
  const roles = ['팀원', '팀장', '실장', '총무', '지점장', '지사장', '파트장', '센터장', '매니저', '본부장', '사업부장'];
  const employmentStatuses = ['퇴직', '재직'];

  return (
    <div>
      <form className="experienceForm">
        <h2>보유역량</h2>
        <table>
          <tbody>
            {experiences.map((experience, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th>회사명</th>
                  <td>
                    <input
                      name="company"
                      value={experience.company}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="회사명"
                    />
                  </td>
                  <th>재직 기간</th>
                  <td colSpan="2">
                    <DatePicker
                      selected={experience.startDate}
                      onChange={(date) => handleDateChange(index, date, 'startDate')}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="입사일"
                      showPopperArrow={false}
                    />
                    <DatePicker
                      selected={experience.endDate}
                      onChange={(date) => handleDateChange(index, date, 'endDate')}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="퇴사일"
                      showPopperArrow={false}
                    />
                  </td>
                </tr>
                <tr>
                  <th>직급/직책</th>
                  <td colSpan="2">
                    <select
                      name="position"
                      value={experience.position}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option value="">직급 선택</option>
                      {positions.map((pos, idx) => (
                        <option key={idx} value={pos}>{pos}</option>
                      ))}
                    </select>
                    <select
                      name="role"
                      value={experience.role}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option value="">직책 선택</option>
                      {roles.map((role, idx) => (
                        <option key={idx} value={role}>{role}</option>
                      ))}
                    </select>
                  </td>
                  <th>재직 여부</th>
                  <td>
                    <select
                      name="employmentStatus"
                      value={experience.employmentStatus}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option value="">재직 여부</option>
                      {employmentStatuses.map((status, idx) => (
                        <option key={idx} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>담당업무</th>
                  <td colSpan="4">
                    <textarea
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="담당 업무"
                      style={{ width: '100%' }}
                    ></textarea>
                  </td>
                </tr>
                {experiences.length > 1 && (
                      <button type="button" className="deleteButton" onClick={() => deleteExperience(index)}>Delete</button>

                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <button type="button" className="addButton" onClick={addExperience}>Add</button>
      </form>
    </div>
  );
};

export default ExperienceForm;
