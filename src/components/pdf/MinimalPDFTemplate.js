import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Courier',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 1.2,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 1.3,
  },
  contactInfo: {
    flexDirection: 'column',
    gap: 3,
    fontSize: 10,
    color: '#6B7280',
  },
  contactItem: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  sectionContent: {
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  summaryText: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobPosition: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    color: '#374151',
  },
  dateRange: {
    fontSize: 8,
    color: '#6B7280',
  },
  responsibilities: {
    fontSize: 8,
    color: '#374151',
    lineHeight: 1.6,
    whiteSpace: 'pre-line',
    marginTop: 6,
  },
  educationItem: {
    marginBottom: 12,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    color: '#374151',
  },
  field: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 2,
  },
  skillsText: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
  },
  projectItem: {
    marginBottom: 15,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  projectDescription: {
    fontSize: 8,
    color: '#374151',
    lineHeight: 1.6,
    marginBottom: 6,
  },
  projectTechnologies: {
    fontSize: 8,
    color: '#6B7280',
  },
});

const MinimalPDFTemplate = ({ data }) => {
  const { personalInfo, summary, workExperience, education, skills, projects } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo?.fullName || 'Your Name'}</Text>
          <Text style={styles.jobTitle}>{personalInfo?.jobTitle || 'Your Job Title'}</Text>
          <View style={styles.contactInfo}>
            {personalInfo?.email && <Text style={styles.contactItem}>{personalInfo.email}</Text>}
            {personalInfo?.phone && <Text style={styles.contactItem}>{personalInfo.phone}</Text>}
            {personalInfo?.location && <Text style={styles.contactItem}>{personalInfo.location}</Text>}
            {personalInfo?.website && <Text style={styles.contactItem}>{personalInfo.website}</Text>}
          </View>
        </View>

        {/* Summary Section */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
          </View>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.sectionContent}>
              {workExperience.map((exp, index) => (
                <View key={exp.id || index} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <View>
                      <Text style={styles.jobPosition}>{exp.position || 'Position'}</Text>
                      <Text style={styles.company}>{exp.company || 'Company'}</Text>
                    </View>
                    <Text style={styles.dateRange}>
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </Text>
                  </View>
                  {exp.responsibilities && (
                    <Text style={styles.responsibilities}>{exp.responsibilities}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Education Section */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.sectionContent}>
              {education.map((edu, index) => (
                <View key={edu.id || index} style={styles.educationItem}>
                  <View style={styles.educationHeader}>
                    <View>
                      <Text style={styles.degree}>{edu.degree || 'Degree'}</Text>
                      <Text style={styles.institution}>{edu.institution || 'Institution'}</Text>
                      {edu.field && <Text style={styles.field}>{edu.field}</Text>}
                    </View>
                    <Text style={styles.dateRange}>
                      {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.skillsText}>
                {skills.map(skill => skill.name || 'Skill').join(', ')}
              </Text>
            </View>
          </View>
        )}

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.sectionContent}>
              {projects.map((project, index) => (
                <View key={project.id || index} style={styles.projectItem}>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectTitle}>{project.title || 'Project Title'}</Text>
                  </View>
                  <Text style={styles.projectDescription}>{project.description || 'Project description'}</Text>
                  {project.technologies && (
                    <Text style={styles.projectTechnologies}>
                      Technologies: {project.technologies}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default MinimalPDFTemplate;
