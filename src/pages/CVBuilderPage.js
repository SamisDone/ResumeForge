import React, { useState } from 'react';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import SummaryForm from '../components/forms/SummaryForm';
import WorkExperienceForm from '../components/forms/WorkExperienceForm';
import EducationForm from '../components/forms/EducationForm';
import SkillsForm from '../components/forms/SkillsForm';
import ProjectsForm from '../components/forms/ProjectsForm';
import CVPreview from '../components/CVPreview';
import { User, FileText, Briefcase, GraduationCap, Code, FolderOpen } from 'lucide-react';


const CVBuilderPage = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User, component: PersonalInfoForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Basic information and contact details' },
    { id: 'summary', label: 'Summary', icon: FileText, component: SummaryForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Professional summary and objectives' },
    { id: 'experience', label: 'Work Experience', icon: Briefcase, component: WorkExperienceForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Employment history and achievements' },
    { id: 'education', label: 'Education', icon: GraduationCap, component: EducationForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Academic background and qualifications' },
    { id: 'skills', label: 'Skills', icon: Code, component: SkillsForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Technical and soft skills' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, component: ProjectsForm, color: 'from-slate-600 to-slate-700', bgColor: 'from-slate-50 to-slate-100', description: 'Portfolio and notable projects' }
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component;
  const activeIndex = sections.findIndex(section => section.id === activeSection);



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Professional Resume Builder
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              🚀 Create a professional, ATS-friendly resume with ResumeForge's intuitive builder. 
              Fill out your information, choose a template, and download your perfect resume - it's that easy!
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">👀 Live Preview</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">💾 Auto-Save</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">🎨 Multiple Templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-800">Build Your Resume</h2>
              <div className="text-sm text-slate-600">
                Step {activeIndex + 1} of {sections.length}
              </div>
            </div>
            <div className="flex space-x-2">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`flex-1 h-3 rounded-full transition-all duration-500 ${
                    index <= activeIndex 
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-sm' 
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            <div className="mt-3 text-xs text-slate-400 text-center">
              Complete each section to build your professional resume
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Navigation */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">{activeIndex + 1}</span>
                  </div>
                  Choose Section
                </h2>
                <p className="text-sm text-slate-500 mt-1">Select a section to edit your resume content</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sections.map(({ id, label, icon: Icon, description }, index) => (
                    <button
                      key={id}
                      onClick={() => setActiveSection(id)}
                      className={`group relative overflow-hidden rounded-xl p-5 text-left transition-all duration-300 transform hover:scale-[1.02] ${
                        activeSection === id
                          ? 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 shadow-lg'
                          : 'bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-3 rounded-xl ${
                            activeSection === id 
                              ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md' 
                              : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                          } transition-all duration-300`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className={`font-bold ${
                              activeSection === id ? 'text-emerald-700' : 'text-slate-800'
                            }`}>{label}</span>
                            <div className={`text-xs font-medium ${
                              activeSection === id ? 'text-emerald-600' : 'text-slate-400'
                            }`}>Step {index + 1}</div>
                          </div>
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          activeSection === id ? 'text-slate-600' : 'text-slate-500'
                        }`}>{description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Form Component */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                <div className="flex items-center">
                  {(() => {
                    const currentSection = sections.find(section => section.id === activeSection);
                    const Icon = currentSection?.icon;
                    const sectionIndex = sections.findIndex(section => section.id === activeSection);
                    return (
                      <>
                        <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mr-4 shadow-md">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">
                            {currentSection?.label}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Step {sectionIndex + 1} • {currentSection?.description}
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                {ActiveComponent && <ActiveComponent />}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
                    Live Preview
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Updates as you type</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
                  <div className="bg-white rounded-xl shadow-inner border border-slate-100 p-3">
                    <div className="transform scale-50 origin-top-left w-[200%] h-[400px] overflow-hidden">
                      <CVPreview />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilderPage;
