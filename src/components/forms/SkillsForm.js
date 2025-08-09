import React from 'react';
import { useCV } from '../../context/CVContext';
import { Plus, Trash2 } from 'lucide-react';

const SkillsForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { skills } = state;

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const addSkill = () => {
    dispatch({ type: actionTypes.ADD_SKILL });
  };

  const updateSkill = (id, field, value) => {
    dispatch({
      type: actionTypes.UPDATE_SKILL,
      payload: { id, data: { [field]: value } }
    });
  };

  const removeSkill = (id) => {
    dispatch({
      type: actionTypes.REMOVE_SKILL,
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      {skills.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No skills added yet</p>
          <button
            onClick={addSkill}
            className="btn-primary inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skill Name *
                    </label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                      className="form-input"
                      placeholder="JavaScript, Python, Project Management..."
                    />
                  </div>

                  <div className="w-40">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proficiency Level
                    </label>
                    <select
                      value={skill.level}
                      onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                      className="form-input"
                    >
                      {skillLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Visual proficiency indicator */}
                <div className="mt-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 w-16">{skill.level}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            skill.level === 'Beginner' ? 25 :
                            skill.level === 'Intermediate' ? 50 :
                            skill.level === 'Advanced' ? 75 : 100
                          }%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addSkill}
            className="btn-secondary w-full inline-flex items-center justify-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Skill
          </button>
        </>
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-green-900 mb-2">💡 Skill Tips:</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Include both technical and soft skills relevant to your target role</li>
          <li>• Be honest about your proficiency levels</li>
          <li>• Focus on skills that are in demand in your industry</li>
          <li>• Consider grouping similar skills (e.g., "Programming Languages", "Design Tools")</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsForm;
