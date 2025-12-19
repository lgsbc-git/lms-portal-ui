
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Plus, Search, X, ChevronDown, MoreVertical, Calendar, Users, TrendingUp } from 'lucide-react';
import { INSTRUCTORCOURSES } from '../constants';

const InstructorCatalog: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredCourses = INSTRUCTORCOURSES.filter(course => {
    if (filter === 'All') return true;
    if (filter === 'Created by Me') return true; // In this mock, all are created by Marcus
    return course.status === filter;
  });

  return (
    <div className="p-8 flex flex-col h-full max-w-[1400px] mx-auto relative z-10">
      <div className="flex flex-col gap-8 mb-10">
        <div className="flex flex-wrap justify-between items-end gap-6 border-b border-slate-200 pb-8">
          <div className="flex min-w-72 flex-col gap-3">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm tracking-wide uppercase">
              <Building2 size={18} />
              <span>TechStream Internal</span>
            </div>
            <h2 className="text-text-main text-4xl font-display font-bold leading-tight tracking-tight">Course Catalog</h2>
            <p className="text-secondary text-base font-normal max-w-2xl leading-relaxed">
              Browse your created content, manage drafts, and analyze performance metrics for your published TechStream training modules.
            </p>
          </div>
          <button 
            onClick={() => navigate('/create-course')}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover transition-all text-white shadow-lg shadow-teal-700/20 text-sm font-bold tracking-wide"
          >
            <Plus size={20} className="mr-2" />
            <span className="truncate">Create New Course</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center bg-white p-2 rounded-2xl shadow-soft border border-slate-200">
          <div className="flex-1 w-full relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              className="w-full h-11 rounded-xl bg-slate-50 border-transparent text-text-main placeholder:text-slate-400 pl-10 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all p-0" 
              placeholder="Search courses by title, ID, or tag..."
            />
          </div>
          <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>
          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto p-1 lg:p-0 no-scrollbar">
            {['All', 'Created by Me', 'Published', 'Drafts'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex h-9 shrink-0 items-center gap-x-2 rounded-lg px-4 transition-all text-sm font-medium border ${
                  filter === f 
                    ? 'bg-primary-light text-primary-hover border-primary/20' 
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{f}</span>
                {filter === f && f !== 'All' && <X size={16} />}
                {f === 'All' && <ChevronDown size={16} className="text-slate-400" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        {filteredCourses.map(course => (
          <div key={course.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                  {course.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-dark text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-secondary">
                    <span className="flex items-center gap-1 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${course.status === 'Published' ? 'bg-emerald-500' : 'bg-amber-400'}`}></span>
                      {course.status}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span>{course.modules} Modules</span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-primary p-1 rounded-full hover:bg-slate-50 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-2 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-secondary text-xs">
                  <Calendar size={16} className="text-primary" />
                  <span>{course.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary text-xs">
                  <Users size={16} className="text-primary" />
                  <span>{course.enrolled.toLocaleString()} Enrolled</span>
                </div>
                {course.avgScore && (
                  <div className="col-span-2 flex items-center gap-2 text-secondary text-xs">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mr-2">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: `${course.avgScore}%` }}></div>
                    </div>
                    <span className="whitespace-nowrap font-medium text-slate-700">{course.avgScore}% Avg. Score</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-2 mt-2">
                <button className="flex-1 h-9 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-colors shadow-sm shadow-teal-700/10">
                  {course.status === 'Draft' ? 'Edit' : 'Manage'}
                </button>
                <button className="flex-1 h-9 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors border border-slate-200 hover:border-slate-300 shadow-sm">
                  Analytics
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCatalog;
