import React, { useRef } from 'react';
import { useCV } from '../context/CVContext';
import { pdf } from '@react-pdf/renderer';
import CVPreview from '../components/CVPreview';
import TemplateSelector from '../components/TemplateSelector';
import PDFDocument from '../components/PDFDocument';
import { Download, Eye, Palette } from 'lucide-react';

const PreviewPage = () => {
  const { state } = useCV();
  const componentRef = useRef();

  const handleDownloadPDF = async () => {
    try {
      // Debug: Log the current state data
      console.log('PDF Generation - Current state:', state);
      console.log('PDF Generation - Selected template:', state.selectedTemplate);
      console.log('PDF Generation - Personal info:', state.personalInfo);
      console.log('PDF Generation - Work experience:', state.workExperience);
      
      const blob = await pdf(<PDFDocument data={state} template={state.selectedTemplate} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${state.personalInfo.fullName || 'CV'}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Professional Resume Preview & Export
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Preview Your
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Forged Resume
              </span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              👀 Review your professional resume, switch between templates, and download when you're ready. 
              Your perfect resume is just one click away - crafted with ResumeForge!
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">👀 Live Preview</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">🎨 Template Switch</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-200">📄 PDF Export</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Template Selector */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Template Selection */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mr-3 shadow-md">
                      <Palette className="h-4 w-4" />
                    </div>
🎨 Choose Template
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Switch designs instantly - no data loss!</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                  <TemplateSelector />
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mr-3 shadow-md">
                      <Download className="h-4 w-4" />
                    </div>
📄 Export Options
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Download your professional resume</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                  <div className="space-y-4">
                    <button
                      onClick={handleDownloadPDF}
                      className="group relative w-full inline-flex items-center justify-center px-6 py-4 text-white bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Download className="relative h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative">✨ Download Professional PDF</span>
                    </button>
                    <div className="text-xs text-slate-500 text-center leading-relaxed">
                      <div className="flex items-center justify-center space-x-4 mb-2">
                        <span className="flex items-center bg-slate-100 px-2 py-1 rounded-full">📄 ATS-Friendly</span>
                        <span className="flex items-center bg-slate-100 px-2 py-1 rounded-full">🚀 Instant</span>
                        <span className="flex items-center bg-slate-100 px-2 py-1 rounded-full">✨ High-Quality</span>
                      </div>
                      <p className="text-slate-400 mt-2">Ready for job applications</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Stats */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mr-3 shadow-md">
                      <Eye className="h-4 w-4" />
                    </div>
📈 Resume Summary
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Your content overview at a glance</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                        Work Experience:
                      </span>
                      <span className="font-bold text-slate-800 bg-emerald-100 px-3 py-1 rounded-full text-xs">
                        {state.workExperience.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        Education:
                      </span>
                      <span className="font-bold text-slate-800 bg-cyan-100 px-3 py-1 rounded-full text-xs">
                        {state.education.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Skills:
                      </span>
                      <span className="font-bold text-slate-800 bg-blue-100 px-3 py-1 rounded-full text-xs">
                        {state.skills.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                        Projects:
                      </span>
                      <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full text-xs">
                        {state.projects.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg border border-emerald-200">
                      <span className="text-slate-700 flex items-center font-medium">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        Template:
                      </span>
                      <span className="font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs capitalize">
                        {state.selectedTemplate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV Preview */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
                    Live Preview
                  </h3>
                  <div className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Template: <span className="capitalize font-bold text-slate-800">{state.selectedTemplate}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-1">Real-time CV preview with your selected template</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="bg-white rounded-xl shadow-inner p-4 border border-slate-100">
                  <div className="transform scale-75 origin-top-left w-[133.33%] overflow-hidden">
                    <div ref={componentRef}>
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

export default PreviewPage;
