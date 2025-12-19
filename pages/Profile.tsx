
import React from 'react';
import { useAuth } from '../App';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Account Settings</h1>
        <p className="text-slate-500 text-lg font-light">Manage your personal profile, update contact information, and view credentials.</p>
      </header>

      <div className="flex gap-10 border-b border-slate-200">
        <button className="pb-4 text-[#0d9488] font-black text-sm tracking-widest uppercase border-b-4 border-[#0d9488]">General Profile</button>
        <button className="pb-4 text-slate-400 hover:text-slate-600 font-bold text-sm tracking-widest uppercase transition-colors">Security</button>
        <button className="pb-4 text-slate-400 hover:text-slate-600 font-bold text-sm tracking-widest uppercase transition-colors">Certifications</button>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-8">
          <div className="relative group cursor-pointer">
            <img src={user?.avatar} alt="Profile" className="w-28 h-28 rounded-full border-4 border-[#0d9488] shadow-lg object-cover" />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-icons text-white">edit</span>
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900">{user?.name}</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">{user?.title}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[#0d9488] text-[10px] font-black uppercase mt-4 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse"></span>
              Active Status
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none py-3 px-8 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">Remove Photo</button>
          <button className="flex-1 md:flex-none py-3 px-8 bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-2xl text-sm font-bold shadow-lg shadow-[#0d9488]/20 transition-all flex items-center justify-center gap-2">
            <span className="material-icons text-lg">upload</span>
            Upload New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
              <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
              <span className="material-icons text-slate-400">person</span>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Name</label>
                <input type="text" defaultValue={user?.name.split(' ')[0]} className="w-full h-12 bg-slate-50 border-transparent rounded-2xl px-5 text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] transition-all outline-none font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last Name</label>
                <input type="text" defaultValue={user?.name.split(' ')[1]} className="w-full h-12 bg-slate-50 border-transparent rounded-2xl px-5 text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] transition-all outline-none font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Job Title</label>
                <input type="text" defaultValue={user?.title} className="w-full h-12 bg-slate-50 border-transparent rounded-2xl px-5 text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] transition-all outline-none font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Department</label>
                <div className="relative">
                  <select className="w-full h-12 bg-slate-50 border-transparent rounded-2xl px-5 text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] transition-all outline-none font-medium appearance-none">
                    <option>Operations & Safety</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                  </select>
                  <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bio</label>
                <textarea rows={3} defaultValue="Experienced professional dedicated to continuous improvement and organizational growth." className="w-full bg-slate-50 border-transparent rounded-2xl p-5 text-slate-900 focus:bg-white focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] transition-all outline-none font-medium resize-none" />
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-8 sticky top-24">
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#0d9488]/20 transform hover:-translate-y-0.5">
                Save All Changes
              </button>
              <button className="w-full py-4 bg-transparent border border-slate-200 text-slate-500 font-bold rounded-2xl hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            </div>
            <div className="h-px bg-slate-100"></div>
            <div className="space-y-6">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Privacy Settings</h4>
              {[

                { label: 'Email Notifications', sub: 'Weekly digest updates' }
              ].map((set, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">{set.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{set.sub}</span>
                  </div>
                  <div className="w-12 h-6 bg-teal-500 rounded-full relative flex items-center px-1">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm absolute right-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
