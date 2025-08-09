import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#1E293B',
    padding: 30,
    color: '#FFFFFF',
  },
  mainContent: {
    width: '65%',
    padding: 40,
    paddingLeft: 30,
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: 30,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 1,
  },
  jobTitle: {
    fontSize: 14,
    color: '#60A5FA',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contactInfo: {
    marginBottom: 25,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    fontSize: 9,
    color: '#CBD5E1',
  },
  contactIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 15,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
    position: 'relative',
  },
  summaryText: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'justify',
    backgroundColor: '#F9FAFB',
    padding: 15,
    borderRadius: 6,
  },
  experienceItem: {
    marginBottom: 20,
    paddingLeft: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
    backgroundColor: '#FAFBFF',
    padding: 15,
    borderRadius: 6,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  jobPosition: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1F2937',
  },
  company: {
    fontSize: 12,
    fontWeight: 600,
    color: '#3B82F6',
    marginBottom: 6,
  },
  dateRange: {
    fontSize: 10,
    color: '#6B7280',
    backgroundColor: '#E5E7EB',
    padding: 4,
    borderRadius: 4,
  },
  responsibilities: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  skillName: {
    fontSize: 10,
    color: '#1E40AF',
    fontWeight: 600,
  },
  skillLevel: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 2,
  },
  projectItem: {
    marginBottom: 18,
    paddingLeft: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    backgroundColor: '#F0FDF4',
    padding: 15,
    borderRadius: 6,
  },
  projectTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  projectTechnologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techTag: {
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 600,
  },
});

const ModernPDFTemplate = ({ data }) => {
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
            {personalInfo?.email && <Text style={styles.contactItem}>📧 {personalInfo.email}</Text>}
            {personalInfo?.phone && <Text style={styles.contactItem}>📱 {personalInfo.phone}</Text>}
            {personalInfo?.location && <Text style={styles.contactItem}>📍 {personalInfo.location}</Text>}
            {personalInfo?.website && <Text style={styles.contactItem}>🌐 {personalInfo.website}</Text>}
          </View>
        </View>

        {/* Summary Section */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
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
              <View key={edu.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.jobPosition}>{edu.degree || 'Degree'}</Text>
                    <Text style={styles.company}>{edu.institution || 'Institution'}</Text>
                    {edu.field && <Text style={styles.responsibilities}>{edu.field}</Text>}
                  </View>
                  <Text style={styles.dateRange}>
                    {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill) => (
                <View key={skill.id} style={styles.skillItem}>
                  <Text style={styles.skillName}>{skill.name || 'Skill'}</Text>
                  <Text style={styles.skillLevel}>{skill.level || 'Intermediate'}</Text>
                </View>
              ))}
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
                  <View style={styles.projectTechnologies}>
                    {project.technologies.split(',').map((tech, index) => (
                      <Text key={index} style={styles.techTag}>
                        {tech.trim()}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ModernPDFTemplate;
