import React, { useState } from 'react';
import './ExperienceForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    position2: '',
    position3: '',
    startDate: null,
    endDate: null,
    years: '',
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
      position2: '',
      position3: '',
      startDate: null,
      endDate: null,
      years: '',
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


  const positions2 = ['사원', '주임', '계장','대리','과장','차장','부장','감사','이사','상무','전무','부사장','사장'];
  const positions3 = ['팀원', '팀장', '실장','총무','지점장','지사장','파트장','센터장','매니저','본부장','사업부장'];

  return (
    <form>
      {experiences.map((experience, index) => (
        <div key={index}>
          <input
            name="company"
            value={experience.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="회사명"
          />
          <input
            name="position"
            value={experience.position}
            onChange={(e) => handleChange(index, e)}
            placeholder="직무"
          />
          <select
            name="position2"
            value={experience.position2}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="">직급 선택</option>
            {positions2.map((pos, idx) => (
              <option key={idx} value={pos}>{pos}</option>
            ))}
          </select>
          <select
            name="position3"
            value={experience.position3}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="">직책 선택</option>
            {positions3.map((pos, idx) => (
              <option key={idx} value={pos}>{pos}</option>
            ))}
          </select>
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
          <input
            name="years"
            value={experience.years}
            onChange={(e) => handleChange(index, e)}
            placeholder="연차 입력"
          />
          <textarea
            name="description"
            value={experience.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="담당 업무"
          ></textarea>
          {experiences.length > 1 && (
            <button type="button" onClick={() => deleteExperience(index)}>Delete</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add</button>
    </form>
  );
};

export default ExperienceForm;
