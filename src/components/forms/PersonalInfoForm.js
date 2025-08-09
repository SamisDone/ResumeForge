import React, { useRef } from 'react';
import { useCV } from '../../context/CVContext';
import { Upload, X } from 'lucide-react';

const PersonalInfoForm = () => {
  const { state, dispatch, actionTypes } = useCV();
  const { personalInfo } = state;
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    dispatch({
      type: actionTypes.UPDATE_PERSONAL_INFO,
      payload: { [field]: value }
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('profilePicture', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    handleInputChange('profilePicture', null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Picture */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Picture
        </label>
        <div className="flex items-center space-x-4">
          {personalInfo.profilePicture ? (
            <div className="relative">
              <img
                src={personalInfo.profilePicture}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
              <Upload className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profile-picture"
            />
            <label
              htmlFor="profile-picture"
              className="btn-secondary cursor-pointer inline-flex items-center"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo
            </label>
            <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
          </div>
        </div>
      </div>

      {/* Personal Information Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="form-input"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Job Title *
          </label>
          <input
            type="text"
            id="jobTitle"
            value={personalInfo.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className="form-input"
            placeholder="Software Developer"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={personalInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="form-input"
            placeholder="john.doe@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="form-input"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={personalInfo.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="form-input"
            placeholder="New York, NY"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
            Website/Portfolio
          </label>
          <input
            type="url"
            id="website"
            value={personalInfo.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="form-input"
            placeholder="https://johndoe.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
