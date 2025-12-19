import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { UserRole } from '../types';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>(UserRole.EMPLOYEE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-stretch bg-white">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 xl:px-32 py-12 relative z-10">
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <img
            src="/lgstechlogo-withoutbg-gradientcolor.png"
            alt="LGS Tech Logo"
            className="w-20 h-20 object-contain"
          />
        </div>


        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#0B2559] mb-3">Welcome Back</h1>
            <p className="text-gray-500">Please select your role and enter credentials to access the Employee Learning Portal.</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-4 rounded-xl transition-all shadow-sm mb-8 group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA56YFdv9M5HyHb5ypwY22OiEPTCc4qT6Oo6a7XSegapy7O2IJSk-CP-LvCGCiOqax-BVfyAbtIt4hAEXnNAr2Ge3xsKTnpSAWw2RM-oi4GqH_MohAR6vxKdLbqvDwGEuzq2KTAcyh-uvt9xM77YnY44psvIwmTl4RV59gQGNmg4ZeBmqIU820LYGzDBBAczAmDgkiebB6SAbXZfX0E1UzwCKuFpsKQ1RTEaiCF1Nd1uWP5B1Alhn3SI-2jPcrg9Erf41kZtJijBjpn" alt="MS" className="w-5 h-5" />
            <span>Continue with Microsoft SSO</span>
          </button>

          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-widest">Or log in with email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Role</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-gray-400 group-focus-within:text-[#00C2CB] transition-colors">badge</span>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#00C2CB]/20 focus:border-[#00C2CB] transition-all outline-none appearance-none"
                >
                  {Object.values(UserRole).map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 material-icons text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-gray-400 group-focus-within:text-[#00C2CB] transition-colors">mail_outline</span>
                <input 
                  type="email" 
                  defaultValue="employee@lgsbc.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#00C2CB]/20 focus:border-[#00C2CB] transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-gray-400 group-focus-within:text-[#00C2CB] transition-colors">lock_outline</span>
                <input 
                  type="password" 
                  defaultValue="password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#00C2CB]/20 focus:border-[#00C2CB] transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00C2CB] focus:ring-[#00C2CB]" />
                Remember me
              </label>
              <a href="#" className="text-[#00C2CB] font-bold hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full py-4 bg-[#00C2CB] hover:bg-[#00B0B8] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#00C2CB]/20 transform hover:-translate-y-0.5">
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-400">
            Protected by reCAPTCHA and subject to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
          </p>
        </div>

        <p className="absolute bottom-8 left-8 text-xs text-gray-400">© 2025 LGS Tech | All Rights Reserved.</p>
      </div>

      {/* Right Column: Hero */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-end p-20  hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Office" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2CB]/20 border border-[#00C2CB]/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-[#00C2CB] rounded-full animate-pulse"></span>
            <span className="text-[#00C2CB] text-xs font-bold uppercase tracking-widest">LMS Portal</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Empowering Your Growth Through Intelligent Learning
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Access your personalized training modules, track your progress, and certify your skills in AI, Cloud Solutions, and Business Process Management.
          </p>

          <div className="flex gap-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00C2CB]/20 rounded-lg flex items-center justify-center text-[#00C2CB]">
                <span className="material-icons">school</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl">150+</p>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Courses</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00C2CB]/20 rounded-lg flex items-center justify-center text-[#00C2CB]">
                <span className="material-icons">emoji_events</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl">New</p>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Certifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        {/* <div className="absolute -top-24 -right-24 w-96 h-96 border border-white/5 rounded-full"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 rounded-full"></div> */}
      </div>
    </div>
  );
};

export default Login;
