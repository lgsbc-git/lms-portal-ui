import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Save, Bold, Italic, List, Link } from 'lucide-react';

const CreateCourse: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('Select Domain');
  const [details, setDetails] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  /* =====================================
     LOCAL OUTLINE GENERATOR (NO AI)
  ===================================== */
  const generateLocalOutline = (courseName: string, domainName: string) => {
    return `
Course Title: ${courseName}
Domain: ${domainName}

Course Overview:
This course is designed to provide learners with a structured and practical understanding of key concepts in ${domainName}. It focuses on both theoretical foundations and real-world applications.

Learning Objectives:
• Understand core principles and best practices
• Apply concepts to real-world scenarios
• Identify common challenges and solutions
• Develop practical skills through examples

Course Structure:
1. Introduction & Fundamentals
2. Core Concepts and Methodologies
3. Tools, Techniques, and Case Studies
4. Best Practices & Industry Standards
5. Assessment and Knowledge Validation

Assessment:
• Multiple Choice Questions (MCQs)
• Scenario-based evaluations
• Final knowledge assessment

Target Audience:
Professionals and learners seeking to enhance their knowledge in ${domainName}.
`;
  };

  const handleAiOutline = async () => {
    if (!name || domain === 'Select Domain') {
      alert("Please enter a course name and select a domain first.");
      return;
    }

    setIsGenerating(true);

    // simulate AI delay (UX preserved)
    setTimeout(() => {
      const outline = generateLocalOutline(name, domain);
      setDetails(outline.trim());
      setIsGenerating(false);
    }, 900);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            <span
              className="text-primary hover:underline cursor-pointer"
              onClick={() => navigate('/my-courses')}
            >
              My Courses
            </span>
            <ArrowRight size={10} />
            <span>New</span>
          </div>
          <h1 className="text-dark text-3xl font-bold leading-tight tracking-tight">
            Create New Course
          </h1>
          <p className="text-secondary text-sm mt-1">
            Design your training module, upload content, and prepare assessments.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-xl border border-border text-secondary font-medium hover:bg-slate-50 transition-colors bg-white"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
            <Save size={16} />
            Save & Continue
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-card">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Course Name
                </label>
                <input
                  className="w-full rounded-xl border-border bg-slate-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary transition-all placeholder:text-secondary/50 focus:bg-white p-3"
                  placeholder="e.g. Advanced Cybersecurity Protocols 2024"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-dark">
                    Course Details
                  </label>
                  <button
                    onClick={handleAiOutline}
                    disabled={isGenerating}
                    className="text-primary text-xs font-bold flex items-center gap-1 hover:underline disabled:opacity-50"
                  >
                    <Sparkles size={14} />
                    {isGenerating ? 'Generating...' : 'AI Outline Suggestion'}
                  </button>
                </div>

                <div className="rounded-xl border border-border overflow-hidden bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
                  <div className="flex items-center gap-1 p-2 bg-slate-50 border-b border-border overflow-x-auto">
                    <button className="p-1.5 rounded hover:bg-slate-200 text-secondary transition-colors">
                      <Bold size={18} />
                    </button>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-secondary transition-colors">
                      <Italic size={18} />
                    </button>
                    <div className="w-px h-4 bg-border mx-1"></div>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-secondary transition-colors">
                      <List size={18} />
                    </button>
                    <button className="p-1.5 rounded hover:bg-slate-200 text-secondary transition-colors">
                      <Link size={18} />
                    </button>
                  </div>

                  <textarea
                    className="w-full border-none p-4 min-h-[300px] focus:ring-0 text-sm text-slate-700 resize-none"
                    placeholder="Enter course description, syllabus, and learning objectives..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* REST OF UI UNCHANGED */}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
