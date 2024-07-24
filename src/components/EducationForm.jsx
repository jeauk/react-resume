import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EducationForm = () => {
  const [educations, setEducations] = useState([{
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: null,
    endDate: null,
    graduationStatus: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = educations.slice();
    newEducations[index][name] = value;
    setEducations(newEducations);
  };

  const handleDateChange = (index, date, name) => {
    const newEducations = educations.slice();
    newEducations[index][name] = date;
    setEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([...educations, {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: null,
      endDate: null,
      graduationStatus: ''
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educations);
  };

  return (
    <form onSubmit={handleSubmit}>
      {educations.map((education, index) => (
        <div key={index}>
          <input
            name="school"
            value={education.school}
            onChange={(e) => handleChange(index, e)}
            placeholder="대학교명"
          />

          <select
            name="degree"
            value={education.degree}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="">대학</option>
            <option value="2-3년제">2,3년제</option>
            <option value="4년제">4년제</option>
            <option value="석사">대학원: 석사</option>
            <option value="박사">대학원: 박사</option>
          </select>

          <input
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={(e) => handleChange(index, e)}
            placeholder="전공"
          />

          <DatePicker
            selected={education.startDate}
            onChange={(date) => handleDateChange(index, date, 'startDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="입학일"
            showPopperArrow={false}
          />

          <DatePicker
            selected={education.endDate}
            onChange={(date) => handleDateChange(index, date, 'endDate')}
            dateFormat="yyyy/MM/dd"
            placeholderText="졸업일"
            showPopperArrow={false}
          />

          <select
            name="graduationStatus"
            value={education.graduationStatus}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="">졸업여부</option>
            <option value="재학">재학</option>
            <option value="휴학">휴학</option>
            <option value="수료">수료</option>
            <option value="중퇴">중퇴</option>
            <option value="자퇴">자퇴</option>
            <option value="졸업예정">졸업예정</option>
          </select>
        </div>
      ))}
            <button type="submit">Submit</button>
    </form>
  );
};

export default EducationForm;