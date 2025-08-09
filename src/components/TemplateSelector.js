import React from 'react';
import { useCV } from '../context/CVContext';
import { Check } from 'lucide-react';

const TemplateSelector = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { selectedTemplate } = state;

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and professional with blue accents',
      preview: '/api/placeholder/200/280',
      features: ['Color accents', 'Professional layout', 'Skills progress bars']
    },
    {
      id: 'classic',
      name: 'Classic',
      description: 'Traditional and elegant design',
      preview: '/api/placeholder/200/280',
      features: ['Serif fonts', 'Centered layout', 'Traditional styling']
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple and clean monospace design',
      preview: '/api/placeholder/200/280',
      features: ['Monospace font', 'Black & white', 'Ultra-clean layout']
    }
  ];

  const selectTemplate = (templateId) => {
    dispatch({
      type: actionTypes.SET_TEMPLATE,
      payload: templateId
    });
  };

  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
            selectedTemplate === template.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
          onClick={() => selectTemplate(template.id)}
        >
          <div className="flex items-start space-x-3">
            {/* Template Preview Thumbnail */}
            <div className="w-16 h-20 bg-gray-100 rounded border flex-shrink-0 relative overflow-hidden">
              {/* Mock preview based on template type */}
              {template.id === 'modern' && (
                <div className="p-2 text-xs">
                  <div className="w-full h-1 bg-blue-500 mb-1"></div>
                  <div className="w-3/4 h-0.5 bg-gray-400 mb-0.5"></div>
                  <div className="w-full h-0.5 bg-gray-300 mb-1"></div>
                  <div className="w-2/3 h-0.5 bg-gray-300 mb-0.5"></div>
                  <div className="w-full h-0.5 bg-gray-300"></div>
                </div>
              )}
              {template.id === 'classic' && (
                <div className="p-2 text-xs text-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto mb-1"></div>
                  <div className="w-full h-0.5 bg-gray-400 mb-0.5"></div>
                  <div className="w-3/4 h-0.5 bg-gray-300 mx-auto mb-1"></div>
                  <div className="w-full h-px bg-gray-300 mb-1"></div>
                  <div className="w-2/3 h-0.5 bg-gray-300 mx-auto"></div>
                </div>
              )}
              {template.id === 'minimal' && (
                <div className="p-2 text-xs">
                  <div className="w-3/4 h-0.5 bg-black mb-1"></div>
                  <div className="w-1/2 h-0.5 bg-gray-400 mb-1"></div>
                  <div className="w-1 h-4 bg-black inline-block mr-1"></div>
                  <div className="w-2/3 h-0.5 bg-gray-300 inline-block mb-0.5"></div>
                  <div className="w-1 h-3 bg-black inline-block mr-1"></div>
                  <div className="w-1/2 h-0.5 bg-gray-300 inline-block"></div>
                </div>
              )}
              
              {selectedTemplate === template.id && (
                <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full p-0.5">
                  <Check className="h-2 w-2" />
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {template.name}
              </h4>
              <p className="text-xs text-gray-600 mb-2">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {template.features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-xs text-gray-500 text-center pt-2">
        Click on a template to preview it instantly
      </div>
    </div>
  );
};

export default TemplateSelector;
