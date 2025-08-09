import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Courier',
    fontSize: 10,
    lineHeight: 1.3,
  },
  header: {
    marginBottom: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: '#000000',
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: '#333333',
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'column',
    gap: 3,
    fontSize: 9,
    color: '#333333',
  },
  contactItem: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#000000',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.4,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobPosition: {
    fontSize: 12,
    fontWeight: 700,
    color: '#000000',
  },
  company: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 4,
  },
  dateRange: {
    fontSize: 9,
    color: '#666666',
  },
  responsibilities: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.3,
    whiteSpace: 'pre-line',
  },
  educationItem: {
    marginBottom: 12,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  degree: {
    fontSize: 11,
    fontWeight: 700,
    color: '#000000',
  },
  institution: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 2,
  },
  field: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 4,
  },
  skillsList: {
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  skillsText: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.4,
  },
  projectItem: {
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#000000',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.3,
    marginBottom: 6,
  },
  projectTechnologies: {
    fontSize: 9,
    color: '#666666',
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
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {workExperience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
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
        )}

        {/* Education Section */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <Text style={styles.degree}>{edu.degree || 'Degree'}</Text>
                <Text style={styles.institution}>{edu.institution || 'Institution'}</Text>
                {edu.field && <Text style={styles.field}>{edu.field}</Text>}
                <Text style={styles.dateRange}>
                  {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsList}>
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
            {projects.map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title || 'Project Title'}</Text>
                <Text style={styles.projectDescription}>{project.description || 'Project description'}</Text>
                {project.technologies && (
                  <Text style={styles.projectTechnologies}>
                    Technologies: {project.technologies}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default MinimalPDFTemplate;
