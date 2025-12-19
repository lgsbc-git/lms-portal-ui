
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_COURSES } from '../constants';
import { CourseBadge } from '../types';

const ManagerCatalog: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredCourses = MOCK_COURSES.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="hover:text-primary cursor-pointer">Dashboard</span>
            <span className="material-icons text-base mx-2">chevron_right</span>
            <span className="text-gray-800 dark:text-white font-medium">Course ManagerCatalog</span>
          </div>
          <h1 className="text-3xl font-bold text-secondary dark:text-white">Assign Learning</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Browse courses and assign them to your team members or departments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
          >
            <span className="material-icons">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium text-sm">
            <span className="material-icons text-lg">history</span> Assignment History
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white dark:placeholder-gray-400 outline-none transition"
              placeholder="Search for courses, skills, or topics..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2">
            <select className="w-full py-2.5 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white outline-none">
              <option>All Categories</option>
              <option>Security</option>
              <option>Technical</option>
              <option>Soft Skills</option>
              <option>Management</option>
              <option>Design</option>
              <option>Engineering</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <select className="w-full py-2.5 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white outline-none">
              <option>Level: Any</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <select className="w-full py-2.5 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white outline-none">
              <option>Duration: Any</option>
              <option>&lt; 1 hour</option>
              <option>1 - 4 hours</option>
              <option>4+ hours</option>
            </select>
          </div>
          <div className="lg:col-span-1 flex items-center justify-end">
            <button 
              onClick={() => setSearch('')}
              className="text-primary font-medium text-sm hover:underline"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

       {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition z-10"></div>
              <img 
                alt={course.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" 
                src={course.image}
              />
              
              {course.overlayText && (
                <div className={`absolute inset-0 ${course.id === '4' ? 'bg-secondary/60' : course.id === '5' ? 'bg-purple-900/60' : 'bg-blue-900/60'} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl tracking-wider text-center">{course.overlayText}</span>
                </div>
              )}

              {course.badge !== CourseBadge.NONE && (
                <div className="absolute top-3 left-3 z-20">
                  <span className={`${
                    course.badge === CourseBadge.MANDATORY ? 'bg-red-500' : 
                    course.badge === CourseBadge.POPULAR ? 'bg-blue-500' : 'bg-green-500'
                  } text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide`}>
                    {course.badge}
                  </span>
                </div>
              )}

              <button className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-black/50 p-1.5 rounded-full hover:bg-white dark:hover:bg-black/70 transition text-gray-600 dark:text-gray-300">
                <span className="material-icons text-sm">bookmark_border</span>
              </button>
            </div>

            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-primary">
                <span className="bg-primary/10 px-2 py-0.5 rounded">{course.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">{course.updatedAt || course.provider}</span>
              </div>
              
              <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition">{course.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                <div className="flex items-center gap-1">
                  <span className="material-icons text-base">schedule</span> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons text-base">bar_chart</span> {course.level}
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="material-icons text-base">star</span> {course.rating}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="flex items-center justify-center gap-1 py-2 px-3 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <span className="material-icons text-sm">visibility</span> Preview
                </button>
                <button 
                  onClick={() => navigate(`/assign-course?courseId=${course.id}`)}
                  className="flex items-center justify-center gap-1 py-2 px-3 bg-primary hover:bg-teal-500 text-white rounded-lg text-xs font-bold transition shadow-lg shadow-primary/20"
                >
                  <span className="material-icons text-sm">person_add</span> Assign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
            <span className="material-icons">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium transition">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium transition">3</button>
          <span className="text-gray-400 mx-2">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
            <span className="material-icons">chevron_right</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ManagerCatalog;
