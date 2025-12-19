
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_MEMBERS, MOCK_STATS } from '../constants';
import { MemberStatus } from '../types';

const MyTeam: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Dashboard</span>
        <span className="material-icons text-base mx-2">chevron_right</span>
        <span className="text-gray-800 dark:text-white font-medium">My Team</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-secondary dark:text-white mb-1">My Team Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your direct reports and monitor their learning compliance.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <span className="material-icons text-lg">download</span> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-teal-500 text-white rounded-lg text-sm font-medium transition shadow-lg shadow-primary/20">
            <span className="material-icons text-lg">person_add</span> Add New Member
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition"
          >
            <span className="material-icons">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Total Members</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-blue-600 dark:text-blue-400">
              <span className="material-icons text-xl">groups</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-secondary dark:text-white">{MOCK_STATS.totalMembers}</p>
            <span className="text-xs text-green-600 font-medium bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">{MOCK_STATS.growth}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Team Avg. Completion</h3>
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-icons text-xl">donut_large</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-secondary dark:text-white">{MOCK_STATS.avgCompletion}%</p>
            <span className="text-xs text-gray-400">Target: {MOCK_STATS.targetCompletion}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1 mt-3">
            <div className="bg-primary h-1 rounded-full transition-all duration-1000" style={{ width: `${MOCK_STATS.avgCompletion}%` }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-red-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Compliance Risk</h3>
            <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-500">
              <span className="material-icons text-xl">warning</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-secondary dark:text-white">{MOCK_STATS.complianceRisk}</p>
            <span className="text-xs text-red-500 font-medium">Overdue Tasks</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Requires immediate attention</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Certifications</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-purple-500">
              <span className="material-icons text-xl">workspace_premium</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-secondary dark:text-white">{MOCK_STATS.certifications}</p>
            <span className="text-xs text-green-600 font-medium bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">Top 10% Dept</span>
          </div>
        </div>
      </div>

      {/* Filter/Search Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <span className="material-icons absolute left-3 top-2.5 text-gray-400">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-gray-200 outline-none transition" 
            placeholder="Search team member..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">Filter by:</span>
            <select className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-xs rounded-lg py-2 pl-3 pr-8 focus:ring-primary focus:border-primary dark:text-gray-300 w-full md:w-auto">
              <option>All Statuses</option>
              <option>Compliant</option>
              <option>Non-Compliant</option>
              <option>Overdue</option>
            </select>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-xs rounded-lg py-2 pl-3 pr-8 focus:ring-primary focus:border-primary dark:text-gray-300 w-full md:w-auto">
              <option>All Roles</option>
              <option>Software Eng</option>
              <option>Designer</option>
              <option>Product Mgr</option>
            </select>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_MEMBERS.map((member) => (
          <div key={member.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-md h-full">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {member.avatar ? (
                    <img 
                      alt={member.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm" 
                      src={member.avatar}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm dark:bg-blue-900/40 dark:text-blue-300 dark:border-gray-700">
                      {member.initials}
                    </div>
                  )}
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${
                    member.status === MemberStatus.COMPLIANT ? 'bg-green-500' : 
                    member.status === MemberStatus.OVERDUE ? 'bg-red-500' :
                    member.status === MemberStatus.ONBOARDING ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg leading-tight">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{member.role}</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide mt-0.5">{member.department}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-primary transition rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 p-1">
                <span className="material-icons">more_vert</span>
              </button>
            </div>

            <div className="flex items-center justify-between mb-5 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold inline-flex items-center gap-1.5 border ${
                member.status === MemberStatus.COMPLIANT ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800/50' : 
                member.status === MemberStatus.OVERDUE ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/50' :
                member.status === MemberStatus.ONBOARDING ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50' :
                'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/50'
              }`}>
                <span className="material-icons text-[14px]">
                  {member.status === MemberStatus.COMPLIANT ? 'check_circle' : 
                   member.status === MemberStatus.OVERDUE ? 'error_outline' :
                   member.status === MemberStatus.ONBOARDING ? 'fiber_new' : 'warning_amber'}
                </span> 
                {member.status}
              </span>
              <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                <span className="material-icons text-[14px] text-gray-300">schedule</span> {member.lastActive}
              </span>
            </div>

            <div className="mb-6 flex-grow">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Overall Progress</span>
                <span className={`text-sm font-bold ${
                   member.status === MemberStatus.COMPLIANT ? 'text-primary' : 
                   member.status === MemberStatus.OVERDUE ? 'text-red-500' : 'text-yellow-600 dark:text-yellow-400'
                }`}>{member.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-1000 ${
                    member.status === MemberStatus.COMPLIANT ? 'bg-primary' : 
                    member.status === MemberStatus.OVERDUE ? 'bg-red-500' : 'bg-yellow-400'
                  }`} 
                  style={{ width: `${member.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-5 gap-3">
              <button 
                onClick={() => navigate(`/assign?member=${member.id}`)}
                className="col-span-4 flex items-center justify-center gap-2 bg-primary hover:bg-teal-500 text-white py-2.5 rounded-lg text-sm font-bold transition shadow-lg shadow-primary/20 transform active:scale-95"
              >
                <span className="material-icons text-sm">add_task</span> Assign Course
              </button>
              <button className="col-span-1 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-secondary transition" title="View Profile">
                <span className="material-icons">visibility</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">Showing <span className="font-medium text-gray-900 dark:text-white">1-5</span> of <span className="font-medium text-gray-900 dark:text-white">{MOCK_STATS.totalMembers}</span> members</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-400 text-sm font-medium cursor-not-allowed">Previous</button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary hover:border-primary transition text-sm font-medium">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
