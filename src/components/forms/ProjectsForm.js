import React from 'react';
import { useCV } from '../../context/CVContext';
import { Plus, Trash2, ExternalLink } from 'lucide-react';

const ProjectsForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { projects } = state;

  const addProject = () => {
    dispatch({ type: actionTypes.ADD_PROJECT });
  };

  const updateProject = (id, field, value) => {
    dispatch({
      type: actionTypes.UPDATE_PROJECT,
      payload: { id, data: { [field]: value } }
    });
  };

  const removeProject = (id) => {
    dispatch({
      type: actionTypes.REMOVE_PROJECT,
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      {projects.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No projects added yet</p>
          <button
            onClick={addProject}
            className="btn-primary inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </button>
        </div>
      ) : (
        <>
          {projects.map((project, index) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Project #{index + 1}
                </h4>
                <button
                  onClick={() => removeProject(project.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                    className="form-input"
                    placeholder="E-commerce Web Application"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    rows={4}
                    value={project.description}
                    onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                    className="form-textarea"
                    placeholder="Built a full-stack e-commerce platform using React and Node.js. Implemented features like user authentication, payment processing, and inventory management. Deployed on AWS with CI/CD pipeline."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    value={project.technologies}
                    onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                    className="form-input"
                    placeholder="React, Node.js, MongoDB, AWS, Docker"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate technologies with commas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Link
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                      className="form-input pr-10"
                      placeholder="https://github.com/username/project or https://project-demo.com"
                    />
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addProject}
            className="btn-secondary w-full inline-flex items-center justify-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Project
          </button>
        </>
      )}

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-purple-900 mb-2">💡 Project Tips:</h4>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Include both personal and professional projects</li>
          <li>• Focus on projects that demonstrate relevant skills</li>
          <li>• Mention the impact or results of your projects</li>
          <li>• Include links to live demos or GitHub repositories</li>
          <li>• Highlight the technologies and methodologies used</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsForm;
