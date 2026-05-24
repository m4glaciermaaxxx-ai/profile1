export interface PersonalInfo {
  name: string;
  avatar: string;
  age: number;
  educationLevel: string;
  email: string;
  phone: string;
  title: string;
  subTitle: string;
}

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  major: string;
  courses: string[];
  honors?: string[];
  tag?: string;
}

export interface WorkExperienceItem {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string[];
  achievements: string[];
  tags: string[];
}

export interface MediaExperience {
  platform: string;
  channelName: string;
  role: string;
  description: string[];
  achievements: string[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-5 scale
    iconName?: string;
  }[];
}

export interface CertificateItem {
  name: string;
  authority?: string;
}
