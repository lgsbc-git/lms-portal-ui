import React from 'react';
import { Search, Filter, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCatalog = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Internal Training & <span className="text-primary-500">Development</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Enhance your skills, stay compliant, and grow your career with our curated selection of courses.
            </p>
            <div className="relative max-w-2xl mx-auto">
                <input 
                    type="text" 
                    placeholder="Search for courses, skills, or topics..." 
                    className="w-full py-4 pl-12 pr-4 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/30 border-none shadow-xl"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={24} />
                <button className="absolute right-2 top-2 bg-primary-500 hover:bg-primary-600 text-white p-2.5 rounded-xl transition-colors">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><Filter size={18} /> Filters</h3>
                    <button className="text-xs font-semibold text-primary-600 hover:text-primary-700">Reset</button>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Department</h4>
                        <div className="space-y-2">
                            {['Engineering', 'Sales', 'HR', 'Finance', 'Design'].map(dept => (
                                <label key={dept} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 border-slate-300" />
                                    <span className="text-sm text-slate-600">{dept}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Type</h4>
                        <div className="space-y-2">
                            {['Mandatory', 'Optional', 'Workshop', 'Certification'].map(type => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 border-slate-300" />
                                    <span className="text-sm text-slate-600">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        {/* CourseCatalog Grid */}
        <div className="flex-1">
             <div className="flex items-center justify-between mb-6">
                <p className="text-slate-500">Showing <span className="font-bold text-slate-900">6</span> of <span className="font-bold text-slate-900">24</span> courses</p>
                <select className="border-none bg-transparent text-sm font-semibold text-slate-700 cursor-pointer focus:ring-0">
                    <option>Recommended</option>
                    <option>Newest</option>
                    <option>Popular</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Course Card 1 */}
                <div onClick={() => navigate('/course/1')} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Cybersecurity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Mandatory</div>
                         <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-lg flex items-center gap-1">
                            <Clock size={12} /> 1h 30m
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">IT & Security</span>
                            <span className="text-xs text-slate-500">• Online</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">2024 Cybersecurity Awareness</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">Essential training on phishing, password security, and data protection protocols.</p>
                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold">LG</div>
                            </div>
                            <span className="text-sm font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">Enroll Now <ArrowRight size={16} /></span>
                        </div>
                    </div>
                </div>

                 {/* Course Card 2 */}
                <div onClick={() => navigate('/course/2')} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Leadership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">In Progress</div>
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">
                             <div className="h-full bg-primary-500 w-[45%]"></div>
                         </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">Management</span>
                            <span className="text-xs text-slate-500">• 45% Complete</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Strategic Leadership Principles</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">Develop your leadership style and learn how to manage high-performing diverse teams.</p>
                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-xs text-slate-400 italic">Last accessed 2 days ago</span>
                            <button className="text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 px-4 py-1.5 rounded-full transition-colors">Resume</button>
                        </div>
                    </div>
                </div>

                 {/* Course Card 3 */}
                <div onClick={() => navigate('/course/3')} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Communication" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</div>
                         <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-lg flex items-center gap-1">
                            <Clock size={12} /> 2h 15m
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">Soft Skills</span>
                            <span className="text-xs text-slate-500">• Workshop</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Effective Business Communication</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">Master the art of clear, concise, and persuasive communication in a remote-first world.</p>
                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                           <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Instr" className="w-8 h-8 rounded-full border-2 border-white" />
                            </div>
                            <span className="text-sm font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">Enroll Now <ArrowRight size={16} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;