
import { Courses, CourseLevel, CourseBadge, TeamMember, MemberStatus } from './types';
import { InstructorCourse, Evaluation, Question } from './types';
import { User, StatCardData } from './types';
export const MOCK_COURSES: InstructorCourse [] = [
  {
    id: '1',
    title: 'Data Security Fundamentals',
    description: 'Comprehensive training on protecting company data, recognizing phishing attempts, and maintaining secure workspaces.',
    category: 'Security',
    provider: 'Internal',
    duration: '2h 30m',
    level: CourseLevel.BEGINNER,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkpZXnNwiS6BrU8hzTpRNk65yAgYZv9MXZB_wdld6zDqTvSew6p2HUv_1lVie8-6yAXHMpqeM8-zAfMUMQ98Xfj3y7WKAxI2pb7gCQaUV9CKsSVcnyDw-hZwW6sr7Alhmm0T6Strzl_-8Bvol4L_iS0uC7oo1HfdTsez2q8hKl8JymtW0nJ0LpRhKRwBQgZlI0mg86B9-W3t1GYm3N9gvmKTROZL-dF9-i7NJZifz9062mCCk5_z3_ZCi9wo9sRGIDwBuHpzSpfiFU',
    badge: CourseBadge.MANDATORY,
    updatedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'Power Platform Basics',
    description: 'Learn to build low-code apps and automate workflows using the Power Platform suite.',
    category: 'Technical',
    provider: 'Microsoft',
    duration: '4h 15m',
    level: CourseLevel.INTERMEDIATE,
    rating: 4.6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAajyaS_3CqFYy9Cph7U1ii0NITMZtOPVODJBdB_jY2g3vXT3L31t-vpi-4HkIRJ-S0FeRW2x-V3P2jqqqWyMp9-niRDoAXYBZgMdHLuYvRYcqrscJZRqRqKsuoZbKCbkEUZ5XbQCjCX5-zrICqsEoztV-FtOeQMzYkpcq1F7eNCgbQ4PoWCqQEz3VCo8VfMdpHk0P8MjccHEbgvE7lSw_rv13BMwziH4p6H_8d3gNsO8y-MeBCN2m4dXmM_Ylep51fffNgUSyP34at',
    badge: CourseBadge.POPULAR
  },
  {
    id: '3',
    title: 'Leadership in Tech',
    description: 'Essential leadership skills for engineering managers and team leads in technical environments.',
    category: 'Soft Skills',
    provider: 'HR Dept',
    duration: '1h 45m',
    level: CourseLevel.ADVANCED,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB97CBTizVkikl9Qp6zqqF3VH56Y0jG_xH_vHVhVeryPMUEKTgyMK92s-hXX6q1a9gEYZNxafnz4FkVE6xD5M67f7_1oossTM78b3KH_Nsp2KoYwioYlpjP95zHzToFeMIRbR1vbq8XgTmLQi2N00rPm7ZeCCoxegZOnfUULILGKH3MI9S_kKabGySwaEsQhmAVJkz-zSf6XBW0UKCQBX-2A22E9RRAwwNa2ONnSSg8lrkdqy7j37EeOhGoEGtrtMcePkgxlAYirx0b',
    badge: CourseBadge.NONE
  },
  {
    id: '4',
    title: 'Agile Methodology',
    description: 'Introduction to Scrum and Kanban frameworks for modern project management.',
    category: 'Management',
    provider: 'External',
    duration: '3h 00m',
    level: CourseLevel.BEGINNER,
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB97CBTizVkikl9Qp6zqqF3VH56Y0jG_xH_vHVhVeryPMUEKTgyMK92s-hXX6q1a9gEYZNxafnz4FkVE6xD5M67f7_1oossTM78b3KH_Nsp2KoYwioYlpjP95zHzToFeMIRbR1vbq8XgTmLQi2N00rPm7ZeCCoxegZOnfUULILGKH3MI9S_kKabGySwaEsQhmAVJkz-zSf6XBW0UKCQBX-2A22E9RRAwwNa2ONnSSg8lrkdqy7j37EeOhGoEGtrtMcePkgxlAYirx0b',
    badge: CourseBadge.NEW,
    overlayText: 'AGILE 101'
  },
  {
    id: '5',
    title: 'Product Design Principles',
    description: 'Core concepts of user-centered design, prototyping, and accessibility standards.',
    category: 'Design',
    provider: 'Design Team',
    duration: '5h 30m',
    level: CourseLevel.INTERMEDIATE,
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAajyaS_3CqFYy9Cph7U1ii0NITMZtOPVODJBdB_jY2g3vXT3L31t-vpi-4HkIRJ-S0FeRW2x-V3P2jqqqWyMp9-niRDoAXYBZgMdHLuYvRYcqrscJZRqRqKsuoZbKCbkEUZ5XbQCjCX5-zrICqsEoztV-FtOeQMzYkpcq1F7eNCgbQ4PoWCqQEz3VCo8VfMdpHk0P8MjccHEbgvE7lSw_rv13BMwziH4p6H_8d3gNsO8y-MeBCN2m4dXmM_Ylep51fffNgUSyP34at',
    badge: CourseBadge.NONE,
    overlayText: 'UX/UI'
  },
  {
    id: '6',
    title: 'Advanced Cloud Architecture',
    description: 'Mastering scalability, security, and reliability on modern cloud infrastructure.',
    category: 'Engineering',
    provider: 'AWS',
    duration: '8h 15m',
    level: CourseLevel.ADVANCED,
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkpZXnNwiS6BrU8hzTpRNk65yAgYZv9MXZB_wdld6zDqTvSew6p2HUv_1lVie8-6yAXHMpqeM8-zAfMUMQ98Xfj3y7WKAxI2pb7gCQaUV9CKsSVcnyDw-hZwW6sr7Alhmm0T6Strzl_-8Bvol4L_iS0uC7oo1HfdTsez2q8hKl8JymtW0nJ0LpRhKRwBQgZlI0mg86B9-W3t1GYm3N9gvmKTROZL-dF9-i7NJZifz9062mCCk5_z3_ZCi9wo9sRGIDwBuHpzSpfiFU',
    badge: CourseBadge.NONE,
    overlayText: 'CLOUD ADVANCED'
  }
];

export const MOCK_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Sarah Jenkins',
    role: 'Senior Engineer',
    department: 'Engineering Dept',
    status: MemberStatus.COMPLIANT,
    progress: 78,
    lastActive: '2h ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFUog0d5F4xMEb0rKPMe1qV2OFfW3blKyg0Rxyx1lzSewDmUJQTcle52b1DTHsXaTtKAxbNaLSL1iTaxky3-S2wjBlfZb6NcUkjsYLj1DmHv8ukwWpYE9c7bxunYrVGFUKgo31u_ARVF3zvzlANFy-J2_DNr5z7ami4A5izkGGPcfRGVdR2YjmdFWvlS3LEbWkYNl4Dq7YrE3Hzhu4eKWvjWuVS4oui2NC4QL7zjzQ4AgjHSCuy8lOUhAkuBGA21Yvlbh3E9Tp3sVZ'
  },
  {
    id: 'm2',
    name: 'Michael Chen',
    role: 'Product Designer',
    department: 'Design Team',
    status: MemberStatus.DUE_SOON,
    progress: 45,
    lastActive: 'Yesterday',
    initials: 'MC'
  },
  {
    id: 'm3',
    name: 'Jessica Davis',
    role: 'Marketing Lead',
    department: 'Marketing Dept',
    status: MemberStatus.OVERDUE,
    progress: 22,
    lastActive: 'Oct 15',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB97CBTizVkikl9Qp6zqqF3VH56Y0jG_xH_vHVhVeryPMUEKTgyMK92s-hXX6q1a9gEYZNxafnz4FkVE6xD5M67f7_1oossTM78b3KH_Nsp2KoYwioYlpjP95zHzToFeMIRbR1vbq8XgTmLQi2N00rPm7ZeCCoxegZOnfUULILGKH3MI9S_kKabGySwaEsQhmAVJkz-zSf6XBW0UKCQBX-2A22E9RRAwwNa2ONnSSg8lrkdqy7j37EeOhGoEGtrtMcePkgxlAYirx0b'
  },
  {
    id: 'm4',
    name: 'David Wilson',
    role: 'Backend Developer',
    department: 'Engineering Dept',
    status: MemberStatus.COMPLIANT,
    progress: 95,
    lastActive: '5d ago',
    initials: 'DW'
  },
  {
    id: 'm5',
    name: 'Amanda Low',
    role: 'Jr. Data Analyst',
    department: 'Data Team',
    status: MemberStatus.ONBOARDING,
    progress: 10,
    lastActive: 'Just now',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkpZXnNwiS6BrU8hzTpRNk65yAgYZv9MXZB_wdld6zDqTvSew6p2HUv_1lVie8-6yAXHMpqeM8-zAfMUMQ98Xfj3y7WKAxI2pb7gCQaUV9CKsSVcnyDw-hZwW6sr7Alhmm0T6Strzl_-8Bvol4L_iS0uC7oo1HfdTsez2q8hKl8JymtW0nJ0LpRhKRwBQgZlI0mg86B9-W3t1GYm3N9gvmKTROZL-dF9-i7NJZifz9062mCCk5_z3_ZCi9wo9sRGIDwBuHpzSpfiFU'
  }
];

export const MOCK_STATS = {
  totalMembers: 12,
  growth: '+1 this month',
  avgCompletion: 76,
  targetCompletion: 80,
  complianceRisk: 2,
  certifications: 28
};



export const INSTRUCTORCOURSES: Course[] = [
  {
    id: 'C001',
    title: 'Advanced Phishing Security Awareness',
    category: 'Security',
    status: 'Published',
    enrolled: 245,
    modules: 12,
    progress: 75,
    avgScore: 87,
    instructor: 'Marcus Chen',
    lastUpdated: 'Oct 12, 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8FHnIsW4vNFsKguNpeTw8cC6hPcRoZWCi-6OpG3UTNoJXrczEw3V6eEF5zGCse2JYmLihFnLYuSVB3gD15om93rQ2LbHqdM0ZjDrRGpiOZ5dDJs-g6VnFViWaITIjIHly06_8IsfbQU39XssJuRYD8uTK5cUS5_A_oB879rZRAaVCAOoK-6yzgREfIBUPdF_mZ2QrWn-qvPpGk8VHgNDpbuBTbkTdmM_PbMbmvW1gGBH1rONS_s5koWU9jaSBUJ6y8bc9PBIJ9hg',
    description: 'Q3 Mandatory Training'
  },
  {
    id: 'C002',
    title: 'Workplace Harassment Prevention',
    category: 'HR',
    status: 'Published',
    enrolled: 1204,
    modules: 8,
    avgScore: 92,
    instructor: 'Marcus Chen',
    lastUpdated: 'Jan 15, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-ha_LC68eKzPY0e1gGK0DdkdWP583V8N4HBq0cVN7mvjxi0pYPZvMwYFmwbTUuLgCbb_0X4LzlQFeURWsCUp2W-UnPj3VSb4HkKqJexrmZ1b1TmTwTPdLl46yTJ68yLL9ezQG_dso4ymBZlCdVdELvRBTZPXDqGFQl3afS1b4GM5-TbRItqTksbtnzeYS0iQjpGBkcFMe9RhNzXuSVfIr2vG0POj9h4rDZXPduPqfnb9nQVzkG1l_4BvCmmUfewWa8L2tUYlXdWGA',
    description: 'HR Compliance'
  },
  {
    id: 'C003',
    title: 'Design Thinking Fundamentals',
    category: 'Design',
    status: 'Draft',
    enrolled: 0,
    modules: 5,
    instructor: 'Marcus Chen',
    lastUpdated: '2 days ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN36GK7B1krfQXUJGjU4emQ-cWQv1WRA9jaYO-oIyEOj6edOKideFkzu0fmhUN0FaWv_uYBm4207UPVosyEhXdlrnJHVbz5_UKkQ0RBEweNsgt4fl7XsVY1ycKs8qxq2V3qE1xYfXcFFH3cCQnEV85WtWj8Wb2ylQHgqbLH3MmqK2iKGff9F8nIWOBQtAgPTDcQ64zZ29ugQeZWKfwr--6qU8PyXHSsmh9kruU4JGRTG_6BYTeu5ZoHmyTljYIcgkIyFMUTy0nQ2WS',
    description: 'Design Principles'
  },
  {
    id: 'C004',
    title: 'Advanced Sales Tactics',
    category: 'Sales',
    status: 'Active',
    enrolled: 40,
    modules: 10,
    progress: 45,
    instructor: 'Marcus Chen',
    lastUpdated: 'Nov 20, 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACyVUPwsCNJ1mz9FhcLIIpB-YvAtxdYbXHsNXt-w4a0ni_kbjYbKQ1ZjtFaQ78n9JQHbBHxN5WVPORn1Wr4tqKTMMjTMZZFPjV-CmPRolYWbwp0uVkFLoJzWWZ0Ej-L_klvn2ibwomL51kwzWi0hz35hx8lIX7nKALcWmNBOJZB1N8eUdQfOh-2t8lZPMERNqHZ7MzpQ2UhZ8OW10nqsYbqiytO4X9PWao0wPA7S-F0kRhprXnyDfkDbr8ptNdl21a17DmP2Xvis1i',
    description: 'Sales Dept Strategy'
  },
  {
    id: 'C005',
    title: 'Intro to Python for Data Science',
    category: 'Engineering',
    status: 'Review Needed',
    enrolled: 89,
    modules: 15,
    avgScore: 90,
    instructor: 'Marcus Chen',
    lastUpdated: '3 days ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnzuM2z4GKce65AEyB3J1RRpIQSgqTkBEy0N4ulvz_nRkzN695XV8-C4Fpd64CAN_ULfi08at_IWD154V-x-GkEASkZz2ZajTp1EJdnbnY2aVvNpBuTopgVy-zuK70xp1m_ZmQJ4VpedtHvBx5HEH0N2D2Xxf6LzL2sM47yWP-AbXf0RpqvU5kUXo9XQFbnEtls0fQyJFwt5qF6Kll1F2_s9udbKR5mUl7PXHrzd2DKTZRZg29yl0y77QAhpSPizmY9IA_8r8YX2n7',
    description: 'Technical Skills'
  }
];

export const EVALUATIONS: Evaluation[] = [
  {
    id: 'E001',
    studentName: 'Alice Freeman',
    studentId: '#82910',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwUWSsLs_uBCKIud8dVxgZMNuLKPm7ONhFubdssh9YhqKMEXHzKhO3pVCvWD12OVrJ_D6wz7_z3MUVcktarq2huThLKKjOIPeX1vf4K7C092lIiMxUVwQ7S0Uc6vnlJpXMsftnfzf0CP5-hinixkKbINJUBWATo7MSNMEfTY3hkxRYwPjxaLNuc8YPeCP4_eB-LYTHW7Gl-fMNO0RNB3n_QqFPNUkNL8A1RcUJa_kEPZSBnmM9E5U_FVyijtiSWLHgwR3ZSJ1aC-tY',
    courseTitle: 'Cybersecurity 101',
    deadline: 'Oct 25, 2023',
    submittedAt: 'Oct 24, 2023',
    status: 'Evaluate',
    department: 'Engineering'
  },
  {
    id: 'E002',
    studentName: 'Marcus Johnson',
    studentId: '#82912',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1FFn6NBVfZXoBvr5VF_v5KP9kxwLlYfMhwmyBNjUxt1lKB7c5oiTEj0N490sFiCGphCEZqi4r3e7BGIMW8mpPk1YkFTYlfLjvCRASdGqN0qRFg0B464JYDvAyRCqNh-eCT0V7uplJ5c1b2-oR-8CBxtdETtSFZFoFSMDeLxy1np5aUtEeGaCcYdghrmve7P1YHvlUJ91yHBZV5JG4DDWquuCqDRC_NQXmb340yNcQyofwr1DASvdtEQhGzQJ0198c0Jy0vYO1nofj',
    courseTitle: 'Advanced Python',
    deadline: 'Oct 23, 2023',
    submittedAt: 'Oct 24, 2023',
    status: 'Graded',
    score: 88,
    department: 'Engineering'
  },
  {
    id: 'E003',
    studentName: 'Sarah Connor',
    studentId: '#82944',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT3bmYJ4sA8E9GA_VXK3tsxBsYAFcaKZRNVg9e9gvtTpfVOI0xYjj5EyDCY02aD8n77veR9F73grfuBXOC6RXVWta05C1Msfjyul4Cs1hw78oLq2Bxa0CgWB4dtT_YC0KGKuG0jptYa2Gb4oRTsD4LNDpD_OKZ3HUGWLq1J2Ef4XOXZTyQXSYf5yc0p0BlAdS_VexXk-EjrbL-E_A7dsD6-U3w-YtkyVgCzHhumW4D8bUXM9EjOkobfCjpSvhkt0CxwthfE3SOY-Gf',
    courseTitle: 'Network Security',
    deadline: 'Oct 26, 2023',
    submittedAt: 'Oct 26, 2023',
    status: 'Evaluate',
    department: 'IT Operations'
  }
];

export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Which of the following is the most common indicator of a phishing email?',
    options: [
      { label: 'A', text: 'A personalized greeting using your full name' },
      { label: 'B', text: 'Urgent language requesting immediate action' },
      { label: 'C', text: 'An email from a known contact' },
      { label: 'D', text: 'A request to update your password on a secure site' }
    ],
    correctOption: 'B',
    selectedOption: 'B',
    isCorrect: true,
    points: 10
  },
  {
    id: 2,
    text: 'What network protocol is used to secure data transfer on the web?',
    options: [
      { label: 'A', text: 'FTP (File Transfer Protocol)' },
      { label: 'B', text: 'SMTP (Simple Mail Transfer Protocol)' },
      { label: 'C', text: 'HTTPS (Hypertext Transfer Protocol Secure)' },
      { label: 'D', text: 'DNS (Domain Name System)' }
    ],
    correctOption: 'C',
    selectedOption: 'A',
    isCorrect: false,
    points: 10
  },
  {
    id: 3,
    text: 'What should be your first action if you suspect a computer is infected with malware?',
    options: [
      { label: 'A', text: 'Restart the computer immediately' },
      { label: 'B', text: 'Backup all files to an external drive' },
      { label: 'C', text: 'Disconnect from the network (Wi-Fi/Ethernet)' },
      { label: 'D', text: 'Continue working until IT arrives' }
    ],
    correctOption: 'C',
    selectedOption: 'C',
    isCorrect: true,
    points: 10
  }
];



export const MOCK_USERS: User[] = [
  { id: '1', name: 'Emily Parker', email: 'emily.p@lgsbc.com', department: 'Marketing', role: 'Employee', status: 'Active', initials: 'EP' },
  { id: '2', name: 'Michael Jordan', email: 'michael.j@lgsbc.com', department: 'Sales Dept', role: 'Manager', status: 'Active', initials: 'MJ' },
  { id: '3', name: 'Sarah Connor', email: 'sarah.c@lgsbc.com', department: 'Operations', role: 'Employee', status: 'Pending', initials: 'SC' },
  { id: '4', name: 'David Kim', email: 'david.k@lgsbc.com', department: 'Engineering', role: 'Instructor', status: 'Inactive', initials: 'DK' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Jane Doe', role: 'Lead Administrator', initials: 'JD', colorClass: 'bg-blue-100 text-blue-600' },
  { id: '2', name: 'Mark Smith', role: 'Course Manager', initials: 'MS', colorClass: 'bg-emerald-100 text-emerald-600' },
  { id: '3', name: 'Ada Lovelace', role: 'IT Support', initials: 'AL', colorClass: 'bg-purple-100 text-purple-600' },
  { id: '4', name: 'Raj Kumar', role: 'Content Editor', initials: 'RK', colorClass: 'bg-amber-100 text-amber-600' },
];

export const STATS: StatCardData[] = [
  { title: 'Total Users', value: '20', icon: 'group', color: 'blue' },
  { title: 'Active Courses', value: '32', icon: 'local_library', color: 'teal' },
  { title: 'Compliance Rate', value: '94%', trend: '94%', trendType: 'up', icon: 'verified_user', color: 'purple' },
  { title: 'Total Mandatory Courses', value: '4', trend: '', trendType: 'neutral', icon: 'assignment_late', color: 'rose' },
];
