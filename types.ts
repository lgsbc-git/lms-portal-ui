
export enum UserRole {
  EMPLOYEE = 'Employee',
  MANAGER = 'Manager',
  ADMIN = 'Admin',
  INSTRUCTOR = 'Instructor'
}

export interface User {
  name: string;
  role: UserRole;
  email: string;
  avatar: string;
  title: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  progress: number;
  duration: string;
  instructor: string;
  image: string;
  dueDate?: string;
  status?: 'In Progress' | 'Completed' | 'Mandatory' | 'Draft';
}
export enum MemberStatus {
  COMPLIANT = 'Compliant',
  DUE_SOON = 'Due Soon',
  OVERDUE = 'Overdue',
  ONBOARDING = 'Onboarding'
}

export enum CourseLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export enum CourseBadge {
  MANDATORY = 'Mandatory',
  POPULAR = 'Popular',
  NEW = 'New',
  NONE = 'None'
}

export interface InstructorCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  provider: string;
  duration: string;
  level: CourseLevel;
  rating: number;
  image: string;
  badge: CourseBadge;
  updatedAt?: string;
  overlayText?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  department: string;
  status: MemberStatus;
  progress: number;
  lastActive: string;
  avatar?: string;
  initials?: string;
  colorClass: string;
}

export interface Stats {
  totalMembers: number;
  growth: string;
  avgCompletion: number;
  targetCompletion: number;
  complianceRisk: number;
  certifications: number;
}
export interface Evaluation {
  id: string;
  studentName: string;
  studentId: string;
  avatar: string;
  courseTitle: string;
  deadline: string;
  submittedAt: string;
  status: 'Evaluate' | 'Graded';
  score?: number;
  department: string;
}

export interface Question {
  id: number;
  text: string;
  options: { label: string; text: string }[];
  correctOption: string;
  selectedOption: string;
  isCorrect: boolean;
  points: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: UserRole;
  status: 'Active' | 'Pending' | 'Inactive';
  initials: string;
}

export interface TeamMember {
 
}

export interface StatCardData {
  title: string;
  value: string;
  trend: string;
  trendType: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}
