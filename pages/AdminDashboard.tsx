
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

const dataCompliance = [
  { name: 'Compliant', value: 1125, color: '#137fec' },
  { name: 'Overdue', value: 225, color: '#ef4444' },
  { name: 'In Progress', value: 150, color: '#f59e0b' },
];

const dataEngagement = [
  { name: 'Week 1', users: 30 },
  { name: 'Week 2', users: 55 },
  { name: 'Week 3', users: 42 },
  { name: 'Week 4', users: 78 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-10 max-w-[1400px] mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight text-[#111418]">Admin Reporting</h1>
          <p className="text-gray-500 font-medium">Overview of training compliance and learner engagement</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
            <button className="px-4 py-2 text-xs font-bold text-[#137fec] bg-blue-50 rounded-lg">Last 30 Days</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">Last 90 Days</button>
          </div>
          <button className="flex items-center gap-2 bg-[#137fec] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Global Compliance', value: '87%', trend: '+2.4%', icon: 'verified_user' },
          { label: 'Avg Learning Hours', value: '12.5 hrs', trend: '+0.8%', icon: 'schedule' },
          { label: 'Course Completions', value: '1,240', trend: '+5.1%', icon: 'emoji_events' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-[#137fec]">{stat.icon}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <span className="material-symbols-outlined text-[#137fec]">{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-4">
              <p className="text-4xl font-black text-gray-900">{stat.value}</p>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg text-xs font-black">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                {stat.trend}
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Compared to previous period</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-8 h-[400px]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Compliance Breakdown</h3>
              <p className="text-sm text-gray-400 font-medium">Total 1,500 enrolled users</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataCompliance} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={32}>
                  {dataCompliance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-8 h-[400px]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Engagement Over Time</h3>
              <p className="text-sm text-gray-400 font-medium">Avg: 45 Active Users/Day</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataEngagement}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="users" stroke="#137fec" strokeWidth={4} dot={{ r: 6, fill: '#137fec', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">Top Performing Courses</h3>
          <button className="text-[#137fec] text-sm font-bold hover:underline">View All Courses</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-5">Course Name</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Enrolled</th>
                <th className="px-8 py-5">Rating</th>
                <th className="px-8 py-5 text-right">Completion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: 'Cybersecurity Fundamentals', cat: 'IT Security', enrolled: 450, rating: 4.8, comp: '92%', img: 'https://picsum.photos/seed/cyber/100' },
                { name: 'Workplace Safety 101', cat: 'Compliance', enrolled: 320, rating: 4.5, comp: '65%', img: 'https://picsum.photos/seed/safety/100' },
                { name: 'Leadership Principles', cat: 'Management', enrolled: 185, rating: 4.9, comp: '40%', img: 'https://picsum.photos/seed/lead/100' }
              ].map((course, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={course.img} alt={course.name} className="w-12 h-12 rounded-xl object-cover" />
                      <span className="font-bold text-gray-900 group-hover:text-[#137fec] transition-colors">{course.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500 font-medium">{course.cat}</td>
                  <td className="px-8 py-6 text-sm text-gray-900 font-black">{course.enrolled}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                      <span className="text-sm font-black text-gray-900">{course.rating}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-black ${
                      parseInt(course.comp) > 90 ? 'bg-emerald-50 text-emerald-600' :
                      parseInt(course.comp) > 60 ? 'bg-yellow-50 text-yellow-600' :
                      'bg-blue-50 text-[#137fec]'
                    }`}>
                      {course.comp} Complete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
