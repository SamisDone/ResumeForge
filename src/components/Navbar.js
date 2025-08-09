import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Home, Eye, Sparkles } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Navigation menu items
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/builder', label: 'Build CV', icon: FileText },
    { path: '/preview', label: 'Preview', icon: Eye }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 p-2 rounded-xl">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  ResumeForge
                </span>
                <Sparkles className="h-4 w-4 text-emerald-500 animate-pulse" />
              </div>
            </Link>
          </div>
          
          {/* Navigation links */}
          <div className="flex space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => {
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-white bg-gradient-to-r from-emerald-600 to-cyan-600 shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-50 hover:shadow-md'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-300 ${
                    active ? 'text-white' : 'group-hover:scale-110'
                  }`} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
