import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for CV data
const initialState = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    profilePicture: null
  },
  summary: '',
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  selectedTemplate: 'modern'
};

// Action types
const actionTypes = {
  UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
  UPDATE_SUMMARY: 'UPDATE_SUMMARY',
  ADD_WORK_EXPERIENCE: 'ADD_WORK_EXPERIENCE',
  UPDATE_WORK_EXPERIENCE: 'UPDATE_WORK_EXPERIENCE',
  REMOVE_WORK_EXPERIENCE: 'REMOVE_WORK_EXPERIENCE',
  ADD_EDUCATION: 'ADD_EDUCATION',
  UPDATE_EDUCATION: 'UPDATE_EDUCATION',
  REMOVE_EDUCATION: 'REMOVE_EDUCATION',
  ADD_SKILL: 'ADD_SKILL',
  UPDATE_SKILL: 'UPDATE_SKILL',
  REMOVE_SKILL: 'REMOVE_SKILL',
  ADD_PROJECT: 'ADD_PROJECT',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT',
  SET_TEMPLATE: 'SET_TEMPLATE',
  LOAD_DATA: 'LOAD_DATA',
  RESET_DATA: 'RESET_DATA'
};

// Reducer function
const cvReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload }
      };
    
    case actionTypes.UPDATE_SUMMARY:
      return {
        ...state,
        summary: action.payload
      };
    
    case actionTypes.ADD_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: [...state.workExperience, {
          id: Date.now(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          responsibilities: ''
        }]
      };
    
    case actionTypes.UPDATE_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: state.workExperience.map(exp =>
          exp.id === action.payload.id ? { ...exp, ...action.payload.data } : exp
        )
      };
    
    case actionTypes.REMOVE_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: state.workExperience.filter(exp => exp.id !== action.payload)
      };
    
    case actionTypes.ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, {
          id: Date.now(),
          institution: '',
          degree: '',
          field: '',
          startYear: '',
          endYear: '',
          current: false
        }]
      };
    
    case actionTypes.UPDATE_EDUCATION:
      return {
        ...state,
        education: state.education.map(edu =>
          edu.id === action.payload.id ? { ...edu, ...action.payload.data } : edu
        )
      };
    
    case actionTypes.REMOVE_EDUCATION:
      return {
        ...state,
        education: state.education.filter(edu => edu.id !== action.payload)
      };
    
    case actionTypes.ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, {
          id: Date.now(),
          name: '',
          level: 'Intermediate'
        }]
      };
    
    case actionTypes.UPDATE_SKILL:
      return {
        ...state,
        skills: state.skills.map(skill =>
          skill.id === action.payload.id ? { ...skill, ...action.payload.data } : skill
        )
      };
    
    case actionTypes.REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };
    
    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, {
          id: Date.now(),
          title: '',
          description: '',
          link: '',
          technologies: ''
        }]
      };
    
    case actionTypes.UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? { ...project, ...action.payload.data } : project
        )
      };
    
    case actionTypes.REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };
    
    case actionTypes.SET_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload
      };
    
    case actionTypes.LOAD_DATA:
      return action.payload;
    
    case actionTypes.RESET_DATA:
      return initialState;
    
    default:
      return state;
  }
};

// Create context
const CVContext = createContext();

// Custom hook to use CV context
export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};

// CV Provider component
export const CVProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('cvMakerData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: actionTypes.LOAD_DATA, payload: parsedData });
      } catch (error) {
        console.error('Error loading saved CV data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cvMakerData', JSON.stringify(state));
  }, [state]);

  const value = {
    state,
    dispatch,
    actionTypes
  };

  return (
    <CVContext.Provider value={value}>
      {children}
    </CVContext.Provider>
  );
};
