import React from 'react';
import { useCV } from '../../context/CVContext';
import { Plus, Trash2 } from 'lucide-react';

const EducationForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { education } = state;

  const addEducation = () => {
    dispatch({ type: actionTypes.ADD_EDUCATION });
  };

  const updateEducation = (id, field, value) => {
    dispatch({
      type: actionTypes.UPDATE_EDUCATION,
      payload: { id, data: { [field]: value } }
    });
  };

  const removeEducation = (id) => {
    dispatch({
      type: actionTypes.REMOVE_EDUCATION,
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      {education.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No education added yet</p>
          <button
            onClick={addEducation}
            className="btn-primary inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </button>
        </div>
      ) : (
        <>
          {education.map((edu, index) => (
            <div key={edu.id} className="border border-gray-200 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Education #{index + 1}
                </h4>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution *
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    className="form-input"
                    placeholder="Harvard University"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree *
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="form-input"
                    placeholder="Bachelor of Science"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                    className="form-input"
                    placeholder="Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Year *
                  </label>
                  <input
                    type="number"
                    value={edu.startYear}
                    onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                    className="form-input"
                    placeholder="2018"
                    min="1950"
                    max="2030"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Year
                  </label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      value={edu.endYear}
                      onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                      className="form-input"
                      placeholder="2022"
                      min="1950"
                      max="2030"
                      disabled={edu.current}
                    />
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={edu.current}
                        onChange={(e) => {
                          updateEducation(edu.id, 'current', e.target.checked);
                          if (e.target.checked) {
                            updateEducation(edu.id, 'endYear', '');
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Currently studying</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addEducation}
            className="btn-secondary w-full inline-flex items-center justify-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Education
          </button>
        </>
      )}
    </div>
  );
};

export default EducationForm;
