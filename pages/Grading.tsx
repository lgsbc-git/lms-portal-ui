import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { EVALUATIONS, MOCK_QUESTIONS } from '../constants';

const Grading: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const evaluation = EVALUATIONS.find(e => e.id === id) || EVALUATIONS[0];

  const [feedback, setFeedback] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [adjustedScore, setAdjustedScore] = useState(80);

  /* =====================================
     LOCAL FEEDBACK GENERATOR (NO AI)
  ===================================== */
  const generateLocalFeedback = (score: number) => {
    if (score >= 85) {
      return `Excellent performance overall. The student demonstrated strong understanding of core concepts and answered most questions accurately. Minor refinements in advanced topics will further strengthen mastery. Keep up the great work.`;
    }

    if (score >= 60) {
      return `Good effort on this assessment. The student shows a reasonable grasp of fundamental concepts but needs improvement in certain areas. Reviewing incorrect responses and revisiting key modules is recommended.`;
    }

    return `The student struggled with several key concepts in this assessment. It is advised to revisit foundational topics, review course materials thoroughly, and attempt practice questions before the next evaluation.`;
  };

  const handleAiFeedback = async () => {
    setIsGenerating(true);

    // simulate AI delay for UX consistency
    setTimeout(() => {
      const suggestion = generateLocalFeedback(adjustedScore);
      setFeedback(suggestion);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-10 pb-12">
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Dashboard</span>
          <span>/</span>
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/evaluations')}>Evaluations</span>
          <span>/</span>
          <span className="text-dark">MCQ Grading</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-dark text-2xl md:text-3xl font-bold tracking-tight">
                {evaluation.courseTitle} Assessment
              </h2>
              <span className="bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                Cybersecurity 101
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Reviewing submission for <span className="font-semibold text-dark">{evaluation.studentName}</span> • Submitted on {evaluation.submittedAt}
            </p>
          </div>

          <button
            onClick={() => navigate('/evaluations')}
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-medium text-sm shadow-sm flex items-center gap-2 transition-all"
          >
            <ArrowLeft size={18} />
            Back to List
          </button>
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 flex flex-col gap-6">
          {MOCK_QUESTIONS.map((q) => (
            <div key={q.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 relative">
              <div className={`absolute top-0 left-0 w-1 h-full ${q.isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`} />
              <h3 className="text-dark font-bold mb-2">Question {q.id}</h3>
              <p className="text-slate-700 text-sm">{q.text}</p>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="xl:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-dark font-bold">{evaluation.studentName}</h3>
              <p className="text-slate-500 text-xs">Student ID: {evaluation.studentId}</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Final Score Adjustment
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={adjustedScore}
                    onChange={(e) => setAdjustedScore(Number(e.target.value))}
                    className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary text-dark font-semibold text-lg"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-semibold text-slate-700">
                      Instructor Feedback
                    </label>
                    <button
                      onClick={handleAiFeedback}
                      disabled={isGenerating}
                      className="text-primary text-xs font-bold flex items-center gap-1 hover:underline disabled:opacity-50"
                    >
                      <Sparkles size={14} />
                      {isGenerating ? 'Generating...' : 'AI Suggestion'}
                    </button>
                  </div>

                  <textarea
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter detailed feedback for the student..."
                    className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary text-slate-700 text-sm resize-none"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
                <button className="bg-white border border-rose-200 text-rose-600 rounded-lg font-bold text-sm py-2">
                  Fail
                </button>
                <button className="bg-primary text-white rounded-lg font-bold text-sm py-2">
                  Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grading;
