
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MOCK_COURSES, MOCK_MEMBERS } from '../constants';
import { Course, TeamMember } from '../types';

const AssignForm: React.FC<{ toggleDarkMode: () => void }> = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const memberId = searchParams.get('member');
  const courseId = searchParams.get('course');

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const member = MOCK_MEMBERS.find(m => m.id === memberId) || MOCK_MEMBERS[0];
    const course = MOCK_COURSES.find(c => c.id === courseId);
    setSelectedMember(member);
    if (course) setSelectedCourse(course);
  }, [memberId, courseId]);

  if (!selectedMember) return null;

  return (
    <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-300">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Dashboard</span>
        <span className="material-icons text-base mx-2">chevron_right</span>
        <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/team')}>My Team</span>
        <span className="material-icons text-base mx-2">chevron_right</span>
        <span className="text-gray-800 dark:text-white font-medium">Assign Course</span>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header Section */}
        <div className="bg-secondary px-8 py-6 border-b border-gray-700/50 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white">Assign Course to Team Member</h1>
            <p className="text-blue-200 text-sm mt-1">Select a course and specify requirements.</p>
          </div>
        </div>

        <div className="p-8">
          {/* Selected Employee Info */}
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              {selectedMember.avatar ? (
                <img 
                  alt={selectedMember.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-100 dark:border-gray-600 shadow-sm" 
                  src={selectedMember.avatar}
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl border-4 border-gray-100 dark:border-gray-600 shadow-sm dark:bg-blue-900/40 dark:text-blue-300">
                  {selectedMember.initials}
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-700 rounded-full"></span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-primary tracking-wider">Selected Employee</span>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{selectedMember.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{selectedMember.role} • {selectedMember.department}</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/team'); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Member Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <span className="material-icons text-lg">person</span>
                </span>
                <input 
                  className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 sm:text-sm cursor-not-allowed font-medium outline-none" 
                  disabled 
                  readOnly 
                  type="text" 
                  value={selectedMember.name}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="course">Select Course</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <span className="material-icons text-lg">school</span>
                </span>
                <select 
                  className="block w-full pl-10 pr-10 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white sm:text-sm focus:ring-primary focus:border-primary transition-shadow shadow-sm outline-none appearance-none" 
                  id="course" 
                  name="course"
                  defaultValue={selectedCourse?.id || ""}
                >
                  <option disabled value="">Choose a course from catalog...</option>
                  <optgroup label="Security & Compliance">
                    <option value="1">Cybersecurity Awareness 2025</option>
                    <option value="1">Data Privacy & GDPR Fundamentals</option>
                  </optgroup>
                  <optgroup label="Engineering">
                    <option value="6">Advanced Cloud Architecture</option>
                    <option value="4">Agile 101 Workshop</option>
                  </optgroup>
                  <optgroup label="Design">
                    <option value="5">UX/UI Fundamentals</option>
                  </optgroup>
                  <optgroup label="Popular">
                    {MOCK_COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </optgroup>
                </select>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <span className="material-icons">expand_more</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="deadline">Deadline</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <span className="material-icons text-lg">event</span>
                  </span>
                  <input 
                    className="block w-full pl-10 pr-3 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white sm:text-sm focus:ring-primary focus:border-primary placeholder-gray-400 shadow-sm outline-none" 
                    id="deadline" 
                    name="deadline" 
                    type="date"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="type">Course Type</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <span className="material-icons text-lg">priority_high</span>
                  </span>
                  <select className="block w-full pl-10 pr-10 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white sm:text-sm focus:ring-primary focus:border-primary shadow-sm outline-none appearance-none" id="type" name="type">
                    <option value="mandatory">Mandatory</option>
                    <option value="optional">Optional</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <span className="material-icons">expand_more</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="notes">Message to Employee <span className="text-gray-400 font-normal ml-1">(Optional)</span></label>
              <textarea 
                className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white sm:text-sm focus:ring-primary focus:border-primary shadow-sm outline-none transition-shadow" 
                id="notes" 
                placeholder="Add a personal note about why this course is being assigned..." 
                rows={3}
              ></textarea>
            </div>

            <div className="pt-6 flex items-center justify-end gap-3 border-t border-gray-100 dark:border-gray-700 mt-8">
              <button 
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-8 py-2.5 bg-primary hover:bg-teal-600 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition transform active:scale-95 flex items-center gap-2"
              >
                <span className="material-icons text-lg">send</span>
                Assign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignForm;
