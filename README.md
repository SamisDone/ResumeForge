# ResumeForge 🚀

**The Professional Resume Builder That Gets You Hired**

ResumeForge is a modern, intuitive web application that helps job seekers create professional, ATS-friendly resumes in minutes. Built with React and featuring a beautiful, responsive design, ResumeForge makes resume building effortless and enjoyable.

## ✨ Features

### 🎨 **Beautiful Templates**
- **Modern Template**: Clean, professional design with emerald accents
- **Classic Template**: Traditional serif layout for conservative industries  
- **Minimal Template**: Clean black & white design for tech roles
- **Live Preview**: See changes in real-time as you build

### 🛠️ **Powerful Builder**
- **Intuitive Forms**: Step-by-step guided process
- **Dynamic Sections**: Add/remove work experience, education, skills, and projects
- **Auto-Save**: Never lose your progress with automatic local storage
- **Profile Pictures**: Upload and preview profile photos
- **Smart Validation**: Helpful tips and guidance throughout

### 📄 **Professional Export**
- **High-Quality PDF**: Download print-ready resumes
- **ATS-Friendly**: Optimized for Applicant Tracking Systems
- **Multiple Formats**: Choose from different template styles
- **Instant Download**: Get your resume in seconds

### 🔒 **Privacy First**
- **Local Storage**: Your data stays in your browser
- **No Registration**: Start building immediately
- **Completely Private**: No server uploads required
- **GDPR Compliant**: Full control over your personal data


## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── forms/           # Form components for each section
│   ├── templates/       # Resume template components
│   ├── pdf/            # PDF export templates
│   ├── Navbar.js       # Navigation component
│   └── CVPreview.js    # Live preview component
├── pages/              # Main page components
│   ├── HomePage.js     # Landing page
│   ├── CVBuilderPage.js # Resume builder interface
│   └── PreviewPage.js  # Preview and export page
├── context/            # React Context for state management
│   └── CVContext.js    # Global CV data context
├── styles/             # CSS and styling
└── App.js             # Main application component
```

## 🎯 Usage

### Building Your Resume

1. **Personal Information**: Add your contact details and upload a profile picture
2. **Professional Summary**: Write a compelling summary of your experience
3. **Work Experience**: Add your employment history with detailed responsibilities
4. **Education**: Include your academic background and qualifications
5. **Skills**: List your technical and soft skills with proficiency levels
6. **Projects**: Showcase your portfolio and notable achievements

### Choosing Templates

- Navigate to the **Preview** page to see your resume in different styles
- Switch between Modern, Classic, and Minimal templates
- Your data is preserved when switching templates
- Download your preferred version as PDF

## 🛠️ Built With

- **React 18** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Declarative routing for React applications
- **React PDF** - High-quality PDF generation for resumes
- **Lucide React** - Beautiful, customizable icons
- **Context API** - Built-in React state management

## 📱 Responsive Design

ResumeForge works perfectly on all devices:
- **Desktop**: Full-featured experience with side-by-side editing and preview
- **Tablet**: Optimized layout for touch interactions
- **Mobile**: Streamlined interface for on-the-go editing

## 🎨 Design System

### Color Palette
- **Primary**: Emerald to Cyan gradient (`from-emerald-500 to-cyan-500`)
- **Neutral**: Slate grays for professional appearance
- **Background**: Subtle gradients for visual depth
- **Text**: High contrast ratios for accessibility

### Typography
- **Headings**: Bold, modern fonts for impact
- **Body**: Clean, readable fonts for content
- **Code**: Monospace fonts for technical elements

