import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 50,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 8,
    letterSpacing: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4B5563',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    fontSize: 10,
    color: '#6B7280',
  },
  contactItem: {
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  summaryText: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'center',
    fontStyle: 'italic',
    marginHorizontal: 30,
  },
  experienceItem: {
    marginBottom: 20,
    textAlign: 'center',
  },
  experienceHeader: {
    marginBottom: 8,
  },
  jobPosition: {
    fontSize: 13,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 4,
  },
  company: {
    fontSize: 11,
    fontWeight: 600,
    color: '#4B5563',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  dateRange: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 8,
  },
  responsibilities: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    textAlign: 'left',
    marginHorizontal: 40,
    whiteSpace: 'pre-line',
  },
  educationItem: {
    marginBottom: 15,
    textAlign: 'center',
  },
  degree: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1F2937',
  },
  institution: {
    fontSize: 11,
    fontWeight: 600,
    color: '#4B5563',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  field: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  skillItem: {
    textAlign: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 10,
    color: '#374151',
    fontWeight: 600,
  },
  skillLevel: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  projectItem: {
    marginBottom: 20,
    textAlign: 'center',
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 8,
    fontStyle: 'italic',
    marginHorizontal: 30,
  },
  projectTechnologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
  },
  techTag: {
    backgroundColor: '#F3F4F6',
    color: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 8,
    fontWeight: 500,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
});

const ClassicPDFTemplate = ({ data }) => {
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
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {workExperience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.jobPosition}>{exp.position || 'Position'}</Text>
                  <Text style={styles.company}>{exp.company || 'Company'}</Text>
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
            <Text style={styles.sectionTitle}>Core Competencies</Text>
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
            <Text style={styles.sectionTitle}>Notable Projects</Text>
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

export default ClassicPDFTemplate;
