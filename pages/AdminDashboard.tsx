
import React, { useState } from 'react';
import { Download, Sparkles, X, TrendingUp, Zap, Users, BookOpen, Search, MoreHorizontal, Users2, CheckCircle, AlertCircle } from 'lucide-react';
import { STATS, TEAM_MEMBERS, MOCK_USERS } from '../constants';

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'group': <Users2 size={24} />,
    'local_library': <BookOpen size={24} />,
    'verified_user': <CheckCircle size={24} />,
    'assignment_late': <AlertCircle size={24} />,
  };
  return iconMap[iconName] || <Users size={24} />;
};

const AdminDashboard: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState(false);

  const fetchInsights = async () => {
    setLoadingInsight(true);
    const statsStr = STATS.map(s => `${s.title}: ${s.value}`).join(', ');
    // Simulate API call
    setTimeout(() => {
      setInsight(`System analysis shows optimal performance. ${statsStr}`);
      setLoadingInsight(false);
    }, 2000);
  };

  return (
    <main className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 pb-12">

        {/* Header Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-1">System Overview</h2>
            <h1 className="text-dark text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Administrator</span>
            </h1>
            <p className="text-secondary text-base md:text-lg font-normal mt-2 max-w-2xl">
              System status is healthy. <span className="text-dark font-medium border-b border-primary/30 pb-0.5">3 pending user approvals</span> and <span className="text-dark font-medium border-b border-primary/30 pb-0.5">99.9% uptime</span> recorded this week.
            </p>
          </div>
          <div className="flex gap-2">

            <button className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-border hover:border-primary/30 text-dark px-5 py-2.5 rounded-lg transition-all text-sm font-medium shadow-sm hover:shadow-md">
              <Download size={18} className="text-primary" />
              Download Report
            </button>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-4 rounded-2xl p-6 bg-white border border-border shadow-card hover:shadow-float transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl transition-colors ${stat.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' :
                  stat.color === 'teal' ? 'bg-primary-bg group-hover:bg-teal-100' :
                    stat.color === 'purple' ? 'bg-purple-50 group-hover:bg-purple-100' :
                      'bg-rose-50 group-hover:bg-rose-100'
                  }`}>
                  <div className={`${stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'teal' ? 'text-primary' :
                      stat.color === 'purple' ? 'text-purple-600' :
                        'text-rose-600'
                    }`}>
                    {getIconComponent(stat.icon as string)}
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 border ${stat.trendType === 'neutral'
                  ? 'text-secondary bg-slate-100 border-border'
                  : 'text-emerald-600 bg-emerald-50 border-emerald-100'
                  }`}>
                  {stat.trendType === 'up' && <TrendingUp size={14} />}
                  {stat.trend}
                </span>
              </div>
              <div>
                <p className="text-secondary text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-dark text-4xl font-bold tracking-tight">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-dark text-xl font-bold mb-6 flex items-center gap-2">
            <Zap size={24} className="text-primary" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a className="group relative overflow-hidden rounded-2xl aspect-[16/8] sm:aspect-[16/7] text-left border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-float cursor-pointer block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `linear-gradient(0deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeOc6y33j0kD3gcmq_E5EdVadAj2BF6J2PR_-hRmZUDyNIRr-4edd6Xgsk3ZDOqh_6Ek4cMFDuJ8-reg7YS2N518p1ARWbFg1hdajvWECZCbEa7-sAmpAqWKJ9e5bH3Q8nczoebUUMEwXXCi3jsokCrj9vg9X0Quf4vijIEFLXqJPXoKT3rb5cGFaJRPPhQk0riOSfUvghVv7RWXa7kVE8Xnr4SMDDzyM2mHqapRSlaxAtmq3IsKdFvxYiMgWSkZ_QDcghZI5tIkd7")` }}>
              </div>
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit p-2.5 rounded-xl mb-3 text-white border border-white/20">
                  <Users size={24} />
                </div>
                <p className="text-white text-lg font-bold">Manage Users</p>
                <p className="text-slate-200 text-sm mt-0.5 font-light">Add or edit accounts</p>
              </div>
            </a>
            <a className="group relative overflow-hidden rounded-2xl aspect-[16/8] sm:aspect-[16/7] text-left border border-border hover:border-purple-500/50 transition-all duration-300 shadow-card hover:shadow-float cursor-pointer block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `linear-gradient(0deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrySgQL088aiN4hYEE26tsMJLjk_jQYBpbgPNyrJgvSQxwTnha23d6mAkjbNJBhri9Nzoi4opVXii9OQU0XpP_6KuzF7KEMOWO-6VbQLRaa60CALZnhIfi0LzJNWmL-maeF48l3j3ium-7-DRNqaOWr-T6hzvN1pCAafPBWeqKT6Hm0HZ0q1msh9K-S-dAloPbtGrmgLkl7MWIcz0kzY2n9fT5vkfAH6ycgvcOjN243mZ9PI9uXrbG4nzir2h1Dn_0pxFMgMSsxICO")` }}>
              </div>
              <div className="absolute inset-0 bg-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit p-2.5 rounded-xl mb-3 text-white border border-white/20">
                  <BookOpen size={24} />
                </div>
                <p className="text-white text-lg font-bold">Manage Courses</p>
                <p className="text-slate-200 text-sm mt-0.5 font-light">Review content</p>
              </div>
            </a>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-dark text-xl font-bold flex items-center gap-2">
              <Users size={24} className="text-primary" />
              Team Members
            </h3>
            <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map(member => (
              <div key={member.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-card hover:shadow-float hover:border-primary/30 transition-all cursor-pointer">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${member.colorClass}`}>
                  {member.initials}
                </div>
                <div>
                  <p className="text-dark text-sm font-bold">{member.name}</p>
                  <p className="text-xs text-secondary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Information Table */}
        <div>
          <h3 className="text-dark text-xl font-bold mb-6 flex items-center gap-2">
            <Search size={24} className="text-primary" />
            User Information
          </h3>
          <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-border text-xs uppercase tracking-wider text-secondary">
                    <th className="px-6 py-4 font-semibold">User Details</th>
                    <th className="px-6 py-4 font-semibold">Department</th>
                    <th className="px-6 py-4 font-semibold">Role</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {MOCK_USERS.map(user => (
                    <tr key={user.id} className="group hover:bg-surface-hover transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-secondary font-bold text-xs border border-border">
                            {user.initials}
                          </div>
                          <div>
                            <p className="font-medium text-dark">{user.name}</p>
                            <p className="text-xs text-secondary">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary">{user.department}</td>
                      <td className="px-6 py-4 text-secondary">{user.role}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full text-xs font-medium border ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                          user.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-slate-100 text-secondary border-border'
                          }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-secondary hover:text-dark hover:bg-slate-200 rounded-lg transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-border bg-slate-50 flex items-center justify-between">
              <p className="text-xs text-secondary">Showing {MOCK_USERS.length} of 2,450 users</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-medium text-secondary bg-white border border-border rounded-lg hover:bg-slate-50 hover:text-dark transition-colors shadow-sm disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 text-xs font-medium text-secondary bg-white border border-border rounded-lg hover:bg-slate-50 hover:text-dark transition-colors shadow-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
