import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CVProvider } from './context/CVContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CVBuilderPage from './pages/CVBuilderPage';
import PreviewPage from './pages/PreviewPage';

function App() {
  return (
    <CVProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<CVBuilderPage />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </div>
      </Router>
    </CVProvider>
  );
}

export default App;
