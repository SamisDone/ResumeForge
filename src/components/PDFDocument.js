import React from 'react';
import ModernPDFTemplate from './pdf/ModernPDFTemplate';
import ClassicPDFTemplate from './pdf/ClassicPDFTemplate';
import MinimalPDFTemplate from './pdf/MinimalPDFTemplate';

const PDFDocument = ({ data, template = 'modern' }) => {
  console.log('PDFDocument - Received data:', data);
  console.log('PDFDocument - Template:', template);
  
  // Ensure data has all required properties with defaults
  const safeData = {
    personalInfo: data?.personalInfo || {},
    summary: data?.summary || '',
    workExperience: data?.workExperience || [],
    education: data?.education || [],
    skills: data?.skills || [],
    projects: data?.projects || []
  };

  console.log('PDFDocument - Safe data:', safeData);

  // Select the appropriate template component
  switch (template) {
    case 'classic':
      return <ClassicPDFTemplate data={safeData} />;
    case 'minimal':
      return <MinimalPDFTemplate data={safeData} />;
    case 'modern':
    default:
      return <ModernPDFTemplate data={safeData} />;
  }
};

export default PDFDocument;
