import React from 'react';
import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

const ClassicTemplate = ({ data }) => {
  const { personalInfo, summary, workExperience, education, skills, projects } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 min-h-[297mm] font-serif">
      {/* Header Section */}
      <div className="text-center mb-8 pb-6 border-b border-gray-300">
        {personalInfo.profilePicture && (
          <img
            src={personalInfo.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <h2 className="text-xl text-gray-600 mb-4 font-light">
          {personalInfo.jobTitle || 'Your Job Title'}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {personalInfo.location}
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              {personalInfo.website}
            </div>
          )}
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center uppercase tracking-wider border-b border-gray-300 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-center italic">{summary}</p>
        </div>
      )}

      {/* Work Experience Section */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wider border-b border-gray-300 pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{exp.position}</h4>
                    <p className="text-gray-700 font-medium italic">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.responsibilities && (
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line pl-4 border-l-2 border-gray-200">
                    {exp.responsibilities}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wider border-b border-gray-300 pb-2">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="text-center">
                <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-700 font-medium italic">{edu.institution}</p>
                {edu.field && <p className="text-gray-600 text-sm">{edu.field}</p>}
                <div className="text-sm text-gray-600 mt-1">
                  {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wider border-b border-gray-300 pb-2">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {skills.map((skill) => (
              <div key={skill.id} className="border border-gray-200 rounded p-3">
                <span className="text-gray-700 font-medium block mb-1">{skill.name}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wider border-b border-gray-300 pb-2">
            Notable Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:underline ml-2"
                    >
                      (View Project)
                    </a>
                  )}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 italic">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.split(',').map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
