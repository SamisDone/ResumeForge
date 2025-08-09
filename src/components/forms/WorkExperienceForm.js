import React from 'react';
import { useCV } from '../../context/CVContext';
import { Plus, Trash2 } from 'lucide-react';

const WorkExperienceForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { workExperience } = state;

  const addWorkExperience = () => {
    dispatch({ type: actionTypes.ADD_WORK_EXPERIENCE });
  };

  const updateWorkExperience = (id, field, value) => {
    dispatch({
      type: actionTypes.UPDATE_WORK_EXPERIENCE,
      payload: { id, data: { [field]: value } }
    });
  };

  const removeWorkExperience = (id) => {
    dispatch({
      type: actionTypes.REMOVE_WORK_EXPERIENCE,
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      {workExperience.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No work experience added yet</p>
          <button
            onClick={addWorkExperience}
            className="btn-primary inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Work Experience
          </button>
        </div>
      ) : (
        <>
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="border border-gray-200 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Experience #{index + 1}
                </h4>
                <button
                  onClick={() => removeWorkExperience(exp.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                    className="form-input"
                    placeholder="Google Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateWorkExperience(exp.id, 'position', e.target.value)}
                    className="form-input"
                    placeholder="Senior Software Engineer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <div className="space-y-2">
                    <input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                      className="form-input"
                      disabled={exp.current}
                    />
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={exp.current}
                        onChange={(e) => {
                          updateWorkExperience(exp.id, 'current', e.target.checked);
                          if (e.target.checked) {
                            updateWorkExperience(exp.id, 'endDate', '');
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Currently working here</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Responsibilities & Achievements
                </label>
                <textarea
                  rows={4}
                  value={exp.responsibilities}
                  onChange={(e) => updateWorkExperience(exp.id, 'responsibilities', e.target.value)}
                  className="form-textarea"
                  placeholder="• Led a team of 5 developers in building scalable web applications&#10;• Improved system performance by 40% through code optimization&#10;• Implemented CI/CD pipelines reducing deployment time by 60%"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use bullet points to list your key responsibilities and achievements
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={addWorkExperience}
            className="btn-secondary w-full inline-flex items-center justify-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Experience
          </button>
        </>
      )}
    </div>
  );
};

export default WorkExperienceForm;
