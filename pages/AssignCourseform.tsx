
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MOCK_COURSES, MOCK_MEMBERS } from '../constants';
import { Course, TeamMember } from '../types';

const AssignCourseForm: React.FC<{ toggleDarkMode: () => void }> = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');
  
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const course = MOCK_COURSES.find(c => c.id === courseId) || MOCK_COURSES[0];
    setSelectedCourse(course);
  }, [courseId]);

  const toggleMemberSelection = (id: string) => {
    setSelectedMembers(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === MOCK_MEMBERS.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(MOCK_MEMBERS.map(m => m.id));
    }
  };

  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMembers.length === 0) {
      alert("Please select at least one team member.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/team');
    }, 1500);
  };

  if (!selectedCourse) return null;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Dashboard</span>
        <span className="material-icons text-base mx-2">chevron_right</span>
        <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Catalog</span>
        <span className="material-icons text-base mx-2">chevron_right</span>
        <span className="text-gray-800 dark:text-white font-medium">Bulk Assignment</span>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header Hero */}
        <div className="bg-secondary relative px-8 py-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="z-10 w-full md:w-1/3">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="z-10 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">{selectedCourse.category}</span>
              <span className="text-blue-200 text-xs">• {selectedCourse.duration}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedCourse.title}</h1>
            <p className="text-blue-100/70 text-sm line-clamp-2 max-w-xl">{selectedCourse.description}</p>
          </div>
        </div>

        <form onSubmit={handleAssign} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left Column: Member Selection */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span className="material-icons text-primary">group_add</span>
                    Assign to Team Members
                  </h2>
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-xs font-bold text-primary hover:underline bg-primary/5 px-2 py-1 rounded"
                  >
                    {selectedMembers.length === MOCK_MEMBERS.length ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {selectedMembers.length} selected
                </span>
              </div>
              
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {MOCK_MEMBERS.map(member => (
                  <div 
                    key={member.id}
                    onClick={() => toggleMemberSelection(member.id)}
                    className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      selectedMembers.includes(member.id) 
                        ? 'bg-primary/5 border-primary shadow-sm' 
                        : 'bg-white dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="relative">
                      {member.avatar ? (
                        <img src={member.avatar} className="w-10 h-10 rounded-full object-cover" alt={member.name} />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                          {member.initials}
                        </div>
                      )}
                      {selectedMembers.includes(member.id) && (
                        <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full p-0.5 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="material-icons text-[10px]">check</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-sm text-gray-800 dark:text-white">{member.name}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{member.email}</p>
                    </div>
                    <div className="flex items-center pr-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedMembers.includes(member.id) 
                          ? 'bg-primary border-primary' 
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {selectedMembers.includes(member.id) && (
                          <span className="material-icons text-white text-[14px]">check</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Settings */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-bold text-secondary dark:text-white flex items-center gap-2">
                <span className="material-icons text-primary">settings</span>
                Assignment Options
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="deadline">Complete By</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-icons text-lg">event</span>
                    </span>
                    <input 
                      type="date" 
                      id="deadline"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none transition dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="priority">Requirement Level</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button" 
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-primary bg-primary/5 text-primary text-xs font-bold"
                    >
                      <span className="material-icons text-sm">assignment_late</span>
                      Mandatory
                    </button>
                    <button 
                      type="button" 
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <span className="material-icons text-sm">assignment</span>
                      Optional
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="message">Instructions (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Briefly explain why this course is being assigned..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none transition dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <div className="flex gap-3">
                  <span className="material-icons text-blue-500 text-xl">info</span>
                  <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    Selected members will receive an automated email notification and a dashboard alert once you confirm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-8 py-3 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-white transition"
            >
              Back to Catalog
            </button>
            <div className="flex gap-3 w-full sm:w-auto">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`flex-grow sm:flex-grow-0 px-10 py-3 bg-primary hover:bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition transform active:scale-95 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Assigning...
                  </>
                ) : (
                  <>
                    <span className="material-icons">send</span>
                    Confirm Assignment
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignCourseForm;
