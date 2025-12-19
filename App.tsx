
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { User, UserRole } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CourseCatalog from './pages/CourseCatalog';
import MyCourse from './pages/MyCourse';
import MyTeam from './pages/MyTeam';
import ManagerCatalog from './pages/ManagerCatalog';
import AssignForm from './pages/AssignForm';
import AssignCourseForm from './pages/AssignCourseform';
import InstructorCatalog from './pages/InstructorCatalog';
import Evaluations from './pages/Evaluation';
import Grading from './pages/Grading';
import CreateCourse from './pages/CreateCourse';


interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('lms_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role: UserRole) => {
    const mockUsers: Record<UserRole, User> = {
      [UserRole.EMPLOYEE]: { name: 'Alex Morgan', role: UserRole.EMPLOYEE, email: 'alex.m@lgstech.com', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB26eHuoP4JL6jfRHNniqR8BdaP2b_GWsz6BbMXIl9AWuJCVOo4khWVwht_v3KL0i_V0W7lrtaBowt3-05isaINK5JoXIvAZQupGPUyHq5ejGgZLbpIXqswdjMO84rUFdsq3yqSaHNh2zV0Hiy5Yy0K5WrzdRG_rHEdepJRnMKKZzk4jopjCAlmbAHgV85E5Ozx3_XV1wWnVeijRL7nhW_xxM_7JrHbpgSlryCc3LzVHqwzF9W-MJNo9DTuTMD-KyNM49YhqUs4c6Tb', title: 'Software Engineer' },
      [UserRole.MANAGER]: { name: 'James Doe', role: UserRole.MANAGER, email: 'james.d@lgstech.com', avatar: 'https://picsum.photos/seed/manager/100', title: 'Engineering Manager' },
      [UserRole.ADMIN]: { name: 'Tom Cook', role: UserRole.ADMIN, email: 'tom.c@lgstech.com', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLjIuYYKIC45b2sO_cfyXV_OZYCdA9jiq3jBbOiOMryOwnxmqPowUw2Sajk3L7DgP5hDHBsxC9Nd3gV9QUTjvaJ51WBNdss0Xfo3Iy5E2-pgICGqL5W6BrlHKLCSpKhxxJ8KMCfd71ZoVQlhNGxuPJLRpTQ9UjbzmP9t-8du4yda00ct56633DCNMPt-B-LrEnRkzWLGZXR2FZYSoxpPUNJJvhKCX6HbJAXsjOYMvyhVFXBONFYYSDBfNDx8sGuWOj-1NZfkGGaUWf', title: 'LMS Administrator' },
      [UserRole.INSTRUCTOR]: { name: 'Sarah Jenkins', role: UserRole.INSTRUCTOR, email: 'sarah.j@lgstech.com', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZUKuIPL0addzIwD_y4R8YQbzyWoalMd0KQeC9MUjAODRCz6yTzCDxRTlad7LKzPP651itBVYXql1E96Lukb2BlbRRSk17FuFQqgiDbt_AqGN8iAT0OCSdF6ZYBqrFKcgOMw_n17xpKxxjRs4imjzgDYoCHAZ_3ff2iAO33Ui8A070Nt3BKAPslGJR91hjywSyQDFG6mLpV7xQ-BYsowj5WTsf0ZpGqnu5MW-CdLKSUZRqDuE4w1wyh5YSxhkTNdzU-EEXwkRDfa4', title: 'Senior Safety Instructor' }
    };
    const selectedUser = mockUsers[role];
    setUser(selectedUser);
    localStorage.setItem('lms_user', JSON.stringify(selectedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lms_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto bg-[#F3F5F9]">
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
          <Route path="/all-courses" element={<MainLayout><CourseCatalog /></MainLayout>} />
          <Route path="/my-courses" element={<MainLayout><MyCourse /></MainLayout>} />
          <Route path="/my-team" element={<MainLayout><MyTeam /></MainLayout>} />
          <Route path="/catalog" element={<MainLayout><ManagerCatalog /></MainLayout>} />
          <Route path="/assign" element={<MainLayout><AssignForm /></MainLayout>} />
          <Route path="/assign-course" element={<MainLayout><AssignCourseForm/></MainLayout>} />
          <Route path="/instructor-catalog" element={<MainLayout><InstructorCatalog/></MainLayout>} />
          <Route path="/evaluations" element={<MainLayout><Evaluations/></MainLayout>} />
          <Route path="/evaluations/:id" element={<MainLayout><Grading/></MainLayout>} />
          <Route path="/create-course" element={<MainLayout><CreateCourse/></MainLayout>} />

          <Route path="/" element={<Navigate to="/login" />} />
    
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
