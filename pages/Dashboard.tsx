
import React from 'react';
import { useAuth } from '../App';
import { UserRole } from '../types';
import EmployeeDashboard from './EmployeeDashboard';
import ManagerDashboard from './ManagerDashboard';
import AdminDashboard from './AdminDashboard';
import InstructorDashboard from './InstructorDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  switch (user?.role) {
    case UserRole.EMPLOYEE: return <EmployeeDashboard />;
    case UserRole.MANAGER: return <ManagerDashboard />;
    case UserRole.ADMIN: return <AdminDashboard />;
    case UserRole.INSTRUCTOR: return <InstructorDashboard />;
    default: return <EmployeeDashboard />;
  }
};

export default Dashboard;
