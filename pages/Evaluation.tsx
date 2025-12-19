
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, BarChart3, Package2, Download, Search, Filter, TrendingUp } from 'lucide-react';
import { EVALUATIONS } from '../constants';

const Evaluations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-10 pb-12">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <CheckCircle2 size={120} className="text-slate-900" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent opacity-50"></div>
        <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
              <span className="hover:text-primary cursor-pointer">Dashboard</span>
              <span>/</span>
              <span className="text-dark">Evaluations</span>
            </nav>
            <h2 className="text-dark text-3xl md:text-4xl font-bold tracking-tight">Evaluations Center</h2>
            <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              Manage assessments, provide student feedback, and track learning outcomes efficiently.
            </p>
          </div>
          <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-3 rounded-lg font-medium text-sm shadow-sm flex items-center gap-2 transition-all">
            <Download size={20} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 relative overflow-hidden group hover:border-orange-200 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle2 size={80} className="text-orange-500" />
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-wider">
              <span className="size-2 rounded-full bg-orange-500"></span>
              Needs Grading
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-dark text-4xl font-bold tracking-tight">14</span>
              <span className="text-slate-500 text-sm">submissions</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-orange-500 h-full rounded-full w-[35%]"></div>
            </div>
            <p className="text-xs text-slate-500">4 high priority items pending {'>'} 24h</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 relative overflow-hidden group hover:border-teal-200 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BarChart3 size={80} className="text-primary" />
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-wider">
              <span className="size-2 rounded-full bg-primary"></span>
              Avg. Score
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-dark text-4xl font-bold tracking-tight">82%</span>
              <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                <TrendingUp size={12} /> +1.5%
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-primary h-full rounded-full w-[82%]"></div>
            </div>
            <p className="text-xs text-slate-500">Across all active courses</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Package2 size={80} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-wider">
              <span className="size-2 rounded-full bg-blue-500"></span>
              Total Submissions
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-dark text-4xl font-bold tracking-tight">842</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-blue-500 h-full rounded-full w-[100%]"></div>
            </div>
            <p className="text-xs text-slate-500">All evaluations received</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-lg font-bold text-dark">Evaluation Requests</h3>
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              <input className="w-full pl-9 bg-white border border-slate-200 text-slate-600 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2" placeholder="Search employee..."/>
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors shadow-sm">
              <Filter size={20} />
            </button>
          </div>
        </div>
        
        <div className="px-4 border-b border-slate-200 flex gap-6">
          <button className="py-3 text-sm font-medium text-primary border-b-2 border-primary">All</button>
          <button className="py-3 text-sm font-medium text-slate-500 hover:text-slate-700 border-b-2 border-transparent hover:border-slate-300 transition-colors">Pending</button>
          <button className="py-3 text-sm font-medium text-slate-500 hover:text-slate-700 border-b-2 border-transparent hover:border-slate-300 transition-colors">Graded</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold tracking-wide" scope="col">Employee Name</th>
                <th className="px-6 py-4 font-semibold tracking-wide" scope="col">Course</th>
                <th className="px-6 py-4 font-semibold tracking-wide" scope="col">Deadline</th>
                <th className="px-6 py-4 font-semibold tracking-wide" scope="col">Submitted (date)</th>
                <th className="px-6 py-4 font-semibold tracking-wide" scope="col">Status</th>
                <th className="px-6 py-4 font-semibold tracking-wide text-right" scope="col">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {EVALUATIONS.map(ev => (
                <tr key={ev.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-slate-100 group-hover:ring-primary/30 transition-all" style={{ backgroundImage: `url(${ev.avatar})` }}></div>
                      <div>
                        <div className="font-medium text-dark">{ev.studentName}</div>
                        <div className="text-xs text-slate-500">ID: {ev.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{ev.courseTitle}</td>
                  <td className="px-6 py-4 text-slate-500">{ev.deadline}</td>
                  <td className="px-6 py-4 text-slate-500">{ev.submittedAt}</td>
                  <td className="px-6 py-4">
                    {ev.status === 'Evaluate' ? (
                      <button 
                        onClick={() => navigate(`/evaluations/${ev.id}`)}
                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm shadow-teal-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                      >
                        Evaluate
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        Graded
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {ev.score ? (
                      <span className="font-bold text-dark text-base">{ev.score}<span className="text-slate-400 text-xs font-normal">/100</span></span>
                    ) : (
                      <span className="text-slate-400 font-medium">-</span>
                    )}
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

export default Evaluations;
