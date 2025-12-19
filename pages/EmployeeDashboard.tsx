
import React from 'react';
import { useAuth } from '../App';
import { Clock, CheckCircle, Award } from 'lucide-react';

const StatCard: React.FC<{ label: string, value: string, icon: string, color: string, sub?: string }> = ({ label, value, icon, color, sub }) => (
  <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group border-l-4 ${color}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-xl bg-opacity-10 bg-current transition-colors`}>
        <span className="material-icons text-2xl">{icon}</span>
      </div>
      {sub && <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded uppercase tracking-wider">{sub}</span>}
    </div>
    <div>
      <h3 className="text-3xl font-black text-gray-900">{value}</h3>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  </div>
);

const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#001E49] leading-tight">Welcome back, {user?.name.split(' ')[0]}! 👋</h1>
          <p className="text-gray-500 text-lg font-light mt-1">You have 2 courses pending this week. Let's keep learning.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 bg-white border border-gray-200 rounded-2xl text-gray-400 hover:text-[#00BFA5] transition-all shadow-sm">
            <span className="material-icons">search</span>
          </button>
          <button className="flex items-center gap-2 bg-[#00BFA5] hover:bg-[#00B097] text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-[#00BFA5]/20 transition-all transform hover:-translate-y-0.5">
            <span className="material-icons text-sm">play_circle</span>
            Resume Last Lesson
          </button>
        </div>
      </header>

     {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-36 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock size={64} className="text-blue-600" />
          </div>
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock size={20} className="text-blue-600" />
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">This Month</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900">12h</h3>
            <p className="text-sm text-slate-500 font-medium">Learning Time</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-36 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle size={64} className="text-green-600" />
          </div>
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-red-50 rounded-lg">
              <CheckCircle size={20} className="text-red-600" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900">4</h3>
            <p className="text-sm text-slate-500 font-medium">Remaining Mandatory Course</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-36 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Award size={64} className="text-purple-600" />
          </div>
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Award size={20} className="text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900">6</h3>
            <p className="text-sm text-slate-500 font-medium">Courses Enrolled</p>
          </div>
        </div>

        <div className="bg-primary-500 p-6 rounded-2xl shadow-lg shadow-primary-500/20 border border-primary-400 flex flex-col justify-between h-36 relative overflow-hidden text-white">
          <div className="absolute -right-4 -top-4 opacity-20 transform rotate-12">
            <Award size={100} />
          </div>
          <div className="flex justify-between items-start mb-2 relative z-10">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Award size={20} className="text-white" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold">3</h3>
            <p className="text-sm text-primary-100 font-medium">Total Completed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#001E49]">Continue Learning</h2>
            <button className="text-[#00BFA5] font-bold text-sm hover:underline">View All</button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 group hover:shadow-xl transition-all duration-300">
            <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden relative shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFUog0d5F4xMEb0rKPMe1qV2OFfW3blKyg0Rxyx1lzSewDmUJQTcle52b1DTHsXaTtKAxbNaLSL1iTaxky3-S2wjBlfZb6NcUkjsYLj1DmHv8ukwWpYE9c7bxunYrVGFUKgo31u_ARVF3zvzlANFy-J2_DNr5z7ami4A5izkGGPcfRGVdR2YjmdFWvlS3LEbWkYNl4Dq7YrE3Hzhu4eKWvjWuVS4oui2NC4QL7zjzQ4AgjHSCuy8lOUhAkuBGA21Yvlbh3E9Tp3sVZ" alt="Banner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-icons text-white text-5xl">play_circle_filled</span>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-[#00BFA5]/10 text-[#00BFA5] rounded-lg text-[10px] font-bold uppercase tracking-widest">AI Integration</span>
                  <span className="text-gray-400 text-xs font-medium flex items-center gap-1"><span className="material-icons text-sm">schedule</span> 45m remaining</span>
                </div>
                <h3 className="text-xl font-bold text-[#001E49] leading-tight mb-2 group-hover:text-[#00BFA5] transition-colors">Advanced Dynamics 365 Workflows</h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">Learn how to automate complex business processes using the latest AI-driven features in Dynamics 365. Pick up right where you left off in Module 3.</p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  <span>Module 3: Logic Apps</span>
                  <span>65% Complete</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00BFA5] to-teal-300 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#001E49] mb-6 flex items-center gap-2">
              <span className="material-icons text-red-500">notification_important</span>
              Urgent Actions
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Compliance Training 2024', due: 'Tomorrow', color: 'bg-red-50' },
                { title: 'Cybersecurity Refresh', due: 'Oct 25', color: 'bg-orange-50' }
              ].map((action, i) => (
                <div key={i} className={`p-4 rounded-2xl ${action.color} border border-white shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Due: {action.due}</p>
                  <p className="text-sm font-bold text-gray-800">{action.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#001E49]">Latest Certificates</h3>
              <button className="text-[10px] font-bold text-[#00BFA5] uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Azure Architect', date: 'Sept 12, 2023', icon: 'verified', color: 'text-blue-500' },
                { title: 'Scrum Master I', date: 'Aug 05, 2023', icon: 'workspace_premium', color: 'text-green-500' }
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${cert.color} transition-all group-hover:scale-110`}>
                    <span className="material-icons text-2xl">{cert.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{cert.title}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{cert.date}</p>
                    <button className="text-[10px] text-[#00BFA5] font-bold mt-1 hover:underline">Download PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
