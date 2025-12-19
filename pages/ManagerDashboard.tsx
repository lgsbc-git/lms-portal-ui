
import React from 'react';
import { useAuth } from '../App';

const TeamMemberRow: React.FC<{ name: string, role: string, email: string, progress: number, status: string, avatar: string }> = ({ name, role, email, progress, status, avatar }) => (
  <tr className="hover:bg-gray-50 transition-colors group cursor-pointer border-b border-gray-50 last:border-0">
    <td className="px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
          <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${status === 'Compliant' ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 group-hover:text-[#00BFA5] transition-colors">{name}</p>
          <p className="text-[10px] text-gray-500 font-medium">{email}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-5 text-sm text-gray-600 font-medium">{role}</td>
    <td className="px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${progress > 80 ? 'bg-green-500' : progress > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs font-bold text-gray-700">{progress}%</span>
      </div>
    </td>
    <td className="px-6 py-5">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
        status === 'Compliant' ? 'bg-green-50 text-green-700 border border-green-100' :
        status === 'Warning' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' :
        'bg-red-50 text-red-700 border border-red-100'
      }`}>
        {status}
      </span>
    </td>
    <td className="px-6 py-5 text-right">
      <button className="text-gray-400 hover:text-[#00BFA5]">
        <span className="material-icons">chevron_right</span>
      </button>
    </td>
  </tr>
);

const ManagerDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-[#001E49]">Manager Dashboard</h1>
          <p className="text-gray-500 text-lg font-light">Overview of team performance and compliance.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
            <span className="material-icons text-lg">download</span> Export Report
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#00BFA5] hover:bg-[#00B097] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-[#00BFA5]/20 transition-all transform hover:-translate-y-0.5">
            <span className="material-icons text-lg">add</span> Assign Training
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Team Members</p>
            <span className="material-icons text-blue-500 bg-blue-50 p-2 rounded-xl">groups</span>
          </div>
          <p className="text-3xl font-black text-gray-900">14</p>
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">2 new joined this month</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team Completion</p>
            <span className="material-icons text-[#00BFA5] bg-[#00BFA5]/10 p-2 rounded-xl">donut_large</span>
          </div>
          <p className="text-3xl font-black text-gray-900">82%</p>
          <p className="text-[10px] text-green-500 mt-2 font-bold uppercase tracking-widest">↑ 4% vs last month</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Overdue Tasks</p>
            <span className="material-icons text-red-500 bg-red-50 p-2 rounded-xl">warning</span>
          </div>
          <p className="text-3xl font-black text-gray-900">5</p>
          <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-widest">Action Required</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total course enrolled</p>
            <span className="material-icons text-purple-500 bg-purple-50 p-2 rounded-xl">grade</span>
          </div>
          <p className="text-3xl font-black text-gray-900">36</p>
          <p className="text-[10px] text-green-500 mt-2 font-bold uppercase tracking-widest">Top performing dept</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-[#001E49] flex items-center gap-2">
                <span className="material-icons text-[#00BFA5]">manage_accounts</span>
                Team Members
              </h2>
              <div className="flex gap-3 w-full sm:w-auto">
                <div className="relative flex-1">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                  <input 
                    type="text" 
                    placeholder="Search team..." 
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#00BFA5]/20 focus:border-[#00BFA5] transition-all outline-none"
                  />
                </div>
                <select className="bg-gray-50 border-transparent rounded-xl text-xs font-bold text-gray-600 focus:ring-0 outline-none cursor-pointer px-4">
                  <option>All Statuses</option>
                  <option>Compliant</option>
                  <option>Overdue</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Completion</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <TeamMemberRow 
                    name="Sarah Jenkins" 
                    role="Sr. Software Engineer" 
                    email="sarah.j@lgstech.com" 
                    progress={95} 
                    status="Compliant" 
                    avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDFUog0d5F4xMEb0rKPMe1qV2OFfW3blKyg0Rxyx1lzSewDmUJQTcle52b1DTHsXaTtKAxbNaLSL1iTaxky3-S2wjBlfZb6NcUkjsYLj1DmHv8ukwWpYE9c7bxunYrVGFUKgo31u_ARVF3zvzlANFy-J2_DNr5z7ami4A5izkGGPcfRGVdR2YjmdFWvlS3LEbWkYNl4Dq7YrE3Hzhu4eKWvjWuVS4oui2NC4QL7zjzQ4AgjHSCuy8lOUhAkuBGA21Yvlbh3E9Tp3sVZ" 
                  />
                  <TeamMemberRow 
                    name="Michael Ross" 
                    role="Product Manager" 
                    email="michael.r@lgstech.com" 
                    progress={60} 
                    status="Warning" 
                    avatar="https://picsum.photos/seed/mr/100" 
                  />
                  <TeamMemberRow 
                    name="Emily Chen" 
                    role="UX Designer" 
                    email="emily.c@lgstech.com" 
                    progress={25} 
                    status="Overdue" 
                    avatar="https://picsum.photos/seed/ec/100" 
                  />
                  <TeamMemberRow 
                    name="David Kim" 
                    role="DevOps Engineer" 
                    email="david.k@lgstech.com" 
                    progress={88} 
                    status="Compliant" 
                    avatar="https://picsum.photos/seed/dk/100" 
                  />
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 flex justify-center">
              <button className="text-xs font-bold text-gray-500 hover:text-[#00BFA5] transition-colors flex items-center gap-1 uppercase tracking-widest">
                View All Members <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFA5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-lg font-bold text-[#001E49] mb-6">Recent Activity</h3>
            <div className="relative pl-5 border-l-2 border-gray-100 space-y-8">
              {[
                { time: 'Today, 10:30 AM', text: 'Sarah Jenkins completed Advanced React Patterns', color: 'bg-green-500' },
                { time: 'Yesterday, 4:15 PM', text: 'Emily Chen failed Cybersecurity Basics (Attempt 2)', color: 'bg-red-500' },
                { time: 'Oct 24, 09:00 AM', text: 'System assigned Q4 Compliance Training to all', color: 'bg-blue-500' }
              ].map((act, i) => (
                <div key={i} className="relative">
                  <span className={`absolute -left-[27px] top-1.5 w-3 h-3 ${act.color} rounded-full ring-4 ring-white`}></span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{act.time}</p>
                  <p className="text-xs font-medium text-gray-700 leading-relaxed">{act.text}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-[#00BFA5] transition-colors border border-gray-100 rounded-2xl hover:bg-gray-50">
              View Activity Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
