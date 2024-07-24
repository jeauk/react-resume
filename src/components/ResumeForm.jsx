import React from 'react';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import CertificationForm from './CertificationForm';
import HighSchoolForm from './HighSchoolForm';

const ResumeForm = () => {
  return (
    <div>
      <form>
      <HighSchoolForm />
      <EducationForm />
      <ExperienceForm />
      <CertificationForm />
      </form>
    </div>
  );
};

export default ResumeForm;