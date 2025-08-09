import React from 'react';
import { useCV } from '../../context/CVContext';

const SummaryForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { summary } = state;

  const handleSummaryChange = (value) => {
    dispatch({
      type: actionTypes.UPDATE_SUMMARY,
      payload: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
          Professional Summary
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Write a brief summary of your professional background, key skills, and career objectives. 
          Keep it concise and impactful (2-4 sentences).
        </p>
        <textarea
          id="summary"
          rows={6}
          value={summary}
          onChange={(e) => handleSummaryChange(e.target.value)}
          className="form-textarea"
          placeholder="Experienced software developer with 5+ years in full-stack development. Proven track record of building scalable web applications using modern technologies. Passionate about clean code, user experience, and continuous learning. Seeking to leverage technical expertise and leadership skills in a senior development role."
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">
            {summary.length}/500 characters
          </span>
          <span className="text-xs text-gray-500">
            {summary.split(' ').filter(word => word.length > 0).length} words
          </span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-900 mb-2">💡 Tips for a great summary:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Start with your years of experience and main expertise</li>
          <li>• Highlight your most relevant skills and achievements</li>
          <li>• Mention the type of role you're seeking</li>
          <li>• Use action words and quantify achievements when possible</li>
          <li>• Keep it professional but let your personality shine through</li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryForm;
