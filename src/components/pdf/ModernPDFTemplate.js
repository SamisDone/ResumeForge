import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderWidth: 4,
    borderColor: '#3B82F6',
    objectFit: 'cover',
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 1.2,
  },
  jobTitle: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: 600,
    marginBottom: 15,
    lineHeight: 1.3,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 9,
    color: '#6B7280',
  },
  contactIcon: {
    width: 8,
    height: 8,
    marginRight: 6,
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitleBar: {
    width: 4,
    height: 20,
    backgroundColor: '#3B82F6',
    marginRight: 10,
  },
  summaryText: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobPosition: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    fontWeight: 600,
    color: '#3B82F6',
  },
  dateRange: {
    fontSize: 9,
    color: '#6B7280',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    width: 8,
    height: 8,
    backgroundColor: '#6B7280',
    borderRadius: 4,
    marginRight: 4,
  },
  responsibilities: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
    marginTop: 4,
  },
  educationItem: {
    marginBottom: 12,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  degree: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  institution: {
    fontSize: 12,
    fontWeight: 600,
    color: '#3B82F6',
  },
  field: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  skillsGrid: {
    flexDirection: 'column',
    gap: 8,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 11,
    color: '#374151',
    fontWeight: 600,
  },
  skillProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  skillBar: {
    width: 80,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
  },
  skillBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  skillLevel: {
    fontSize: 8,
    color: '#6B7280',
    width: 50,
  },
  projectItem: {
    marginBottom: 12,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  projectDescription: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 6,
  },
  projectTechnologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techTag: {
    backgroundColor: '#EFF6FF',
    color: '#1D4ED8',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
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

  const getSkillWidth = (level) => {
    const levels = {
      'beginner': '25%',
      'intermediate': '50%',
      'advanced': '75%',
      'expert': '100%',
    };
    return levels[level?.toLowerCase()] || '50%';
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          {personalInfo?.profilePicture && (
            <Image 
              style={styles.profileImage} 
              src={personalInfo.profilePicture} 
            />
          )}
          <View style={styles.headerContent}>
            <Text style={styles.name}>{personalInfo?.fullName || 'Your Name'}</Text>
            <Text style={styles.jobTitle}>{personalInfo?.jobTitle || 'Your Job Title'}</Text>
            <View style={styles.contactInfo}>
              {personalInfo?.email && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIcon} />
                  <Text>{personalInfo.email}</Text>
                </View>
              )}
              {personalInfo?.phone && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIcon} />
                  <Text>{personalInfo.phone}</Text>
                </View>
              )}
              {personalInfo?.location && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIcon} />
                  <Text>{personalInfo.location}</Text>
                </View>
              )}
              {personalInfo?.website && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIcon} />
                  <Text>{personalInfo.website}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Summary Section */}
        {summary && (
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleBar} />
              <Text>Professional Summary</Text>
            </View>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleBar} />
              <Text>Work Experience</Text>
            </View>
            {workExperience.map((exp, index) => (
              <View key={exp.id || index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.jobPosition}>{exp.position || 'Position'}</Text>
                    <Text style={styles.company}>{exp.company || 'Company'}</Text>
                  </View>
                  <View style={styles.dateRange}>
                    <View style={styles.dateIcon} />
                    <Text>
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </Text>
                  </View>
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
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleBar} />
              <Text>Education</Text>
            </View>
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
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleBar} />
              <Text>Skills</Text>
            </View>
            <View style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <View key={skill.id || index} style={styles.skillItem}>
                  <Text style={styles.skillName}>{skill.name || 'Skill'}</Text>
                  <View style={styles.skillProgress}>
                    <View style={styles.skillBar}>
                      <View 
                        style={[
                          styles.skillBarFill, 
                          { width: getSkillWidth(skill.level) }
                        ]} 
                      />
                    </View>
                    <Text style={styles.skillLevel}>{skill.level || 'Intermediate'}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleBar} />
              <Text>Projects</Text>
            </View>
            {projects.map((project, index) => (
              <View key={project.id || index} style={styles.projectItem}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>{project.title || 'Project Title'}</Text>
                </View>
                <Text style={styles.projectDescription}>{project.description || 'Project description'}</Text>
                {project.technologies && (
                  <View style={styles.projectTechnologies}>
                    {project.technologies.split(',').map((tech, techIndex) => (
                      <Text key={techIndex} style={styles.techTag}>
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
