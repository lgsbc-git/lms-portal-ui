
import React from 'react';
import { useAuth } from '../App';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00BFA5] transition-colors">search</span>
          <input 
            type="text" 
            placeholder="Search for courses, activities, or people..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-[#00BFA5]/20 focus:border-[#00BFA5] transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-full transition-colors relative">
          <span className="material-icons">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>
        <div className="h-8 w-px bg-gray-200 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-none">{user?.name}</p>
            <p className="text-[10px] text-[#00BFA5] font-semibold mt-1 uppercase tracking-wider">{user?.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00BFA5] flex items-center justify-center text-white font-bold shadow-md shadow-[#00BFA5]/20">
            {user?.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
