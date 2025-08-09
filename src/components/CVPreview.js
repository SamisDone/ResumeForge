import React from 'react';
import { useCV } from '../context/CVContext';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

const CVPreview = () => {
  const { state } = useCV();
  const { selectedTemplate } = state;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={state} />;
      case 'classic':
        return <ClassicTemplate data={state} />;
      case 'minimal':
        return <MinimalTemplate data={state} />;
      default:
        return <ModernTemplate data={state} />;
    }
  };

  return (
    <div className="bg-white shadow-lg" id="cv-preview">
      {renderTemplate()}
    </div>
  );
};

export default CVPreview;
