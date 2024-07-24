import React, { useState } from 'react';
import './ExperienceForm.css'

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.slice();
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            placeholder="직책"
          />
          <input
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="시작일"
          />
          <input
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="종료일"
          />
          <textarea
            name="description"
            value={experience.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="업무 내용"
          ></textarea>
          {experiences.length > 1 && (
            <button type="button" onClick={() => deleteExperience(index)}>Delete</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperienceForm;