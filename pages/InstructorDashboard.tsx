
import React from 'react';
import { useAuth } from '../App';
import { Users, Layers, PieChart } from 'lucide-react';

const InstructorDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-10 max-w-[1400px] mx-auto space-y-10">
      <header className="flex flex-col gap-1">
        <h2 className="text-[#0d9488] text-sm font-black uppercase tracking-widest mb-1">Overview</h2>
        <h1 className="text-5xl font-black tracking-tight text-[#0f172a]">
          Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#14b8a6]">{user?.name}</span>
        </h1>
        <p className="text-slate-500 text-lg font-light mt-2 max-w-2xl">
          You have <span className="text-slate-900 font-bold border-b-2 border-[#0d9488]/30 pb-0.5">3 pending evaluations</span> and <span className="text-slate-900 font-bold border-b-2 border-[#0d9488]/30 pb-0.5">2 active courses</span> requiring attention.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Employees enrolled', value: '7', Icon: Users, trend: '+12%', trendColor: 'text-emerald-600', trendBg: 'bg-emerald-50' },
          { label: 'Active Courses', value: '4', Icon: Layers, trend: 'Stable', trendColor: 'text-slate-500', trendBg: 'bg-slate-50' },
          { label: 'Avg. Completion Rate', value: '88%', Icon: PieChart, trend: '+5%', trendColor: 'text-emerald-600', trendBg: 'bg-emerald-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-[#0d9488] transition-colors">
                <stat.Icon size={24} />
              </div>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${stat.trendBg} ${stat.trendColor} border border-black/5`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>  
  );
};

export default InstructorDashboard;
