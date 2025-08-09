import React from 'react';

const MinimalTemplate = ({ data }) => {
  const { personalInfo, summary, workExperience, education, skills, projects } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 min-h-[297mm] font-mono">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-1">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <h2 className="text-lg text-gray-600 mb-4">
          {personalInfo.jobTitle || 'Your Job Title'}
        </h2>
        <div className="text-sm text-gray-600 space-y-1">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
          {personalInfo.website && <div>{personalInfo.website}</div>}
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-wide">
            Summary
          </h3>
          <div className="border-l-2 border-black pl-4">
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </div>
        </div>
      )}

      {/* Work Experience Section */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">
            Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-black pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-base font-bold text-black">{exp.position}</h4>
                    <p className="text-gray-700 text-sm">{exp.company}</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.responsibilities && (
                  <div className="text-gray-700 text-xs leading-relaxed whitespace-pre-line mt-2">
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
          <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">
            Education
          </h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-black pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-black">{edu.degree}</h4>
                    <p className="text-gray-700 text-sm">{edu.institution}</p>
                    {edu.field && <p className="text-gray-600 text-xs">{edu.field}</p>}
                  </div>
                  <div className="text-xs text-gray-500">
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
          <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">
            Skills
          </h3>
          <div className="border-l-2 border-black pl-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.id} className="text-gray-700 text-sm">
                  {skill.name}
                  {skills.indexOf(skill) < skills.length - 1 && ','}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">
            Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border-l-2 border-black pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-bold text-black">{project.title}</h4>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-xs hover:underline"
                    >
                      Link
                    </a>
                  )}
                </div>
                <p className="text-gray-700 text-xs leading-relaxed mb-2">{project.description}</p>
                {project.technologies && (
                  <div className="text-xs text-gray-600">
                    Technologies: {project.technologies}
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

export default MinimalTemplate;
