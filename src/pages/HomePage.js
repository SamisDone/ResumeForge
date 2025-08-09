import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Zap, Download, Palette, Shield, Smartphone, Star, Award, CheckCircle } from 'lucide-react';

const HomePage = () => {
  // Feature cards data
  const features = [
    {
      icon: Zap,
      title: 'Live Preview',
      description: '👀 See your resume update in real-time as you fill in your information - no waiting!',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Multiple Templates',
      description: '🎨 Choose from professional templates designed to impress employers and pass ATS systems',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Download,
      title: 'PDF Export',
      description: '📄 Download your resume as a high-quality PDF ready for job applications - instantly!',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Data Privacy',
      description: '🔒 Your data stays in your browser - completely private, no server uploads required',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: '📱 Create and edit your resume on any device with our responsive design',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Auto Save',
      description: '💾 Never lose your progress with automatic local storage - work with confidence!',
      color: 'from-emerald-500 to-cyan-500'
    }
  ];

  // Statistics to display in hero section
  const stats = [
    { number: '10K+', label: 'CVs Created', icon: FileText },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '4.9/5', label: 'User Rating', icon: Star },
    { number: '24/7', label: 'Available', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Main hero section */}
      <div className="relative overflow-hidden">
        {/* Background with pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 shadow-lg border border-white/20">
              <Star className="h-4 w-4 mr-2" />
              #1 Resume Builder
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Forge Your Perfect
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Resume
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              🚀 Build a stunning, professional resume in minutes with our intuitive builder. 
              Choose from multiple templates, see live previews, and download as high-quality PDF - all for free!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/builder"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FileText className="relative z-10 h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">✨ Start Building Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/preview"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300"
              >
                <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Demo
              </Link>
            </div>

            {/* Statistics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map(({ number, label, icon: Icon }, index) => {
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{number}</div>
                    <div className="text-slate-200 font-medium">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Everything You Need to
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Get Hired Faster
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              🎯 Our comprehensive resume builder includes all the tools and features you need to create a professional, 
              ATS-friendly resume that gets you noticed by employers and lands you interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description, color }, index) => {
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${color} text-white mb-6 inline-block group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>
                
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">{title}</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{description}</p>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-cyan-600/10 to-emerald-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your 
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Dream Career?
              </span>
            </h2>
            <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              🌟 Join thousands of successful job seekers who have created professional resumes with ResumeForge. 
              Your dream job is just one click away - start building today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/builder"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FileText className="relative h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative">Get Started Now</span>
              </Link>
              
              <div className="flex items-center justify-center space-x-4 text-slate-200">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-emerald-400" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-emerald-400" />
                  <span>No Sign-up Required</span>
                </div>
              </div>
            </div>

           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
