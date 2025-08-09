import React from 'react';
import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

const ModernTemplate = ({ data }) => {
  const { personalInfo, summary, workExperience, education, skills, projects } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 min-h-[297mm]">
      {/* Header Section */}
      <div className="flex items-start space-x-6 mb-8 pb-6 border-b-2 border-primary-600">
        {personalInfo.profilePicture && (
          <img
            src={personalInfo.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-primary-600"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <h2 className="text-xl text-primary-600 font-medium mb-4">
            {personalInfo.jobTitle || 'Your Job Title'}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <div className="w-1 h-6 bg-primary-600 mr-3"></div>
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Work Experience Section */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-primary-600 mr-3"></div>
            Work Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.responsibilities && (
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
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
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-primary-600 mr-3"></div>
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-primary-600 font-medium">{edu.institution}</p>
                    {edu.field && <p className="text-gray-600 text-sm">{edu.field}</p>}
                  </div>
                  <div className="text-sm text-gray-500">
                    {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-primary-600 mr-3"></div>
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{
                        width: `${
                          skill.level === 'Beginner' ? 25 :
                          skill.level === 'Intermediate' ? 50 :
                          skill.level === 'Advanced' ? 75 : 100
                        }%`
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-16">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-primary-600 mr-3"></div>
            Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 text-sm hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
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

export default ModernTemplate;
