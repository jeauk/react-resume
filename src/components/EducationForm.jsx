import React, { useState } from 'react';

const EducationForm = () => {
  const [educations, setEducations] = useState([{
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = educations.slice();
    newEducations[index][name] = value;
    setEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([...educations, {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
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
          <input name="school" value={education.school} onChange={(e) => handleChange(index, e)} placeholder="학교명" />
          <input name="degree" value={education.degree} onChange={(e) => handleChange(index, e)} placeholder="학위" />
          <input name="fieldOfStudy" value={education.fieldOfStudy} onChange={(e) => handleChange(index, e)} placeholder="전공" />
          <input name="startDate" value={education.startDate} onChange={(e) => handleChange(index, e)} placeholder="시작일" />
          <input name="endDate" value={education.endDate} onChange={(e) => handleChange(index, e)} placeholder="종료일" />
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add</button>
    </form>
  );
};

export default EducationForm;