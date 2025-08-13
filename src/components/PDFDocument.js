import React from 'react';
import ModernPDFTemplate from './pdf/ModernPDFTemplate';
import ClassicPDFTemplate from './pdf/ClassicPDFTemplate';
import MinimalPDFTemplate from './pdf/MinimalPDFTemplate';

const PDFDocument = ({ data, template = 'modern' }) => {
  console.log('=== PDFDocument Debug ===');
  console.log('Received template:', template);
  console.log('Received data keys:', Object.keys(data || {}));
  console.log('Personal info:', data?.personalInfo);
  console.log('Profile picture exists:', !!data?.personalInfo?.profilePicture);
  
  // Ensure data has all required properties with defaults
  const safeData = {
    personalInfo: {
      fullName: data?.personalInfo?.fullName || '',
      jobTitle: data?.personalInfo?.jobTitle || '',
      email: data?.personalInfo?.email || '',
      phone: data?.personalInfo?.phone || '',
      location: data?.personalInfo?.location || '',
      website: data?.personalInfo?.website || '',
      profilePicture: data?.personalInfo?.profilePicture || null,
    },
    summary: data?.summary || '',
    workExperience: Array.isArray(data?.workExperience) ? data.workExperience : [],
    education: Array.isArray(data?.education) ? data.education : [],
    skills: Array.isArray(data?.skills) ? data.skills : [],
    projects: Array.isArray(data?.projects) ? data.projects : []
  };

  console.log('Safe data prepared for template:', template);
  console.log('Profile picture in safe data:', safeData.personalInfo.profilePicture);
  console.log('========================');

  // Select the appropriate template component with better validation
  const templateLower = template?.toLowerCase() || 'modern';
  
  switch (templateLower) {
    case 'classic':
      console.log('Rendering ClassicPDFTemplate');
      return <ClassicPDFTemplate data={safeData} />;
    case 'minimal':
      console.log('Rendering MinimalPDFTemplate');
      return <MinimalPDFTemplate data={safeData} />;
    case 'modern':
    default:
      console.log('Rendering ModernPDFTemplate (default)');
      return <ModernPDFTemplate data={safeData} />;
  }
};

export default PDFDocument;
