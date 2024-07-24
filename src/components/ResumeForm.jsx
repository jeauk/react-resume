import React from 'react';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import CertificationForm from './CertificationForm';

const ResumeForm = () => {
  return (
    <div>
      <form>
      <EducationForm />
      <ExperienceForm />
      <CertificationForm />
      </form>
    </div>
  );
};

export default ResumeForm;