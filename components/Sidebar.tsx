
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../App';
import { UserRole } from '../types';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();

  const getLinks = () => {
    const baseLinks = [
      { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    ];

    const roleLinks: Record<UserRole, any[]> = {
      [UserRole.EMPLOYEE]: [
        { name: 'All Courses', icon: 'library_books', path: '/all-courses' },
        { name: 'My Courses', icon: 'play_circle_outline', path: '/my-courses', badge: 3 },
        { name: 'Certificates', icon: 'emoji_events', path: '/certificates' },
      ],
      [UserRole.MANAGER]: [
        { name: 'My Team', icon: 'groups', path: '/my-team' },
        { name: 'Course Catalog', icon: 'menu_book', path: '/catalog' },
         { name: 'Manage courses', icon: 'menu_book', path: '/instructor-catalog' },
        { name: 'Evaluations', icon: 'assignment_turned_in', path: '/evaluations' },
      ],
      [UserRole.ADMIN]: [
        { name: 'Course Management', icon: 'book', path: '/instructor-catalog' },
        { name: 'My Team', icon: 'groups', path: '/my-team' },
        { name: 'Course Catalog', icon: 'menu_book', path: '/catalog' },
        { name: 'Evaluations', icon: 'assignment_turned_in', path: '/evaluations' },
        { name: 'User Management', icon: 'people', path: '/user-management' },
      ],
      [UserRole.INSTRUCTOR]: [
        { name: 'Course Catalog', icon: 'menu_book', path: '/instructor-catalog' },
        { name: 'Evaluations', icon: 'assignment_turned_in', path: '/evaluations' },
      ]
    };

    return [...baseLinks, ...(roleLinks[user?.role || UserRole.EMPLOYEE] || [])];
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
      <div className="h-20 flex items-center justify-center border-b border-gray-200">
        <div className="flex flex-col items-center gap-0">
          <img src="/lgstechlogo-withoutbg-gradientcolor.png" alt="LGS Tech Logo" className="h-16 w-16 object-contain" />
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">{user?.role} Portal</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
              ${isActive ? 'bg-[#00BFA5]/10 text-[#00BFA5]' : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <span className="material-icons">{link.icon}</span>
            <span className="flex-1">{link.name}</span>
            {link.badge && (
              <span className="bg-[#00BFA5] text-white text-[10px] px-2 py-0.5 rounded-full">
                {link.badge}
              </span>
            )}
          </NavLink>
        ))}

        <div className="pt-4 mt-4 border-t border-gray-100">
          <p className="px-4 text-[10px] font-semibold text-gray-400 uppercase mb-2">Account</p>
          <NavLink
            to="/profile"
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
              ${isActive ? 'bg-[#00BFA5]/10 text-[#00BFA5]' : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <span className="material-icons">person</span>
            Profile
          </NavLink>

        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
          <img src={user?.avatar} alt="Profile" className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
            <p className="text-[10px] text-gray-500 truncate">{user?.title}</p>
          </div>
          <button onClick={logout} className="text-gray-400 hover:text-red-500 transition-colors">
            <span className="material-icons text-xl">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
