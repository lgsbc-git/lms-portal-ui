import React from 'react';
import { useAuth } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAvatarUpload = (file: File) => {
    // TODO: integrate API upload
    console.log('Uploading avatar:', file);
  };

  const handleRemoveAvatar = () => {
    // TODO: integrate API remove
    console.log('Removing avatar');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          Account Settings
        </h1>
        <p className="text-slate-500 text-lg font-light">
          View your personal profile and credentials.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-10 border-b border-slate-200">
        <button
          onClick={() => navigate('/profile')}
          className={`pb-4 font-black text-sm tracking-widest uppercase border-b-4
            ${
              location.pathname === '/profile'
                ? 'text-[#0d9488] border-[#0d9488]'
                : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
        >
          General Profile
        </button>

        <button
          onClick={() => navigate('/security')}
          className={`pb-4 font-bold text-sm tracking-widest uppercase border-b-4
            ${
              location.pathname === '/security'
                ? 'text-[#0d9488] border-[#0d9488]'
                : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
        >
          Security
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-8">
          {/* Editable Avatar */}
          <div className="relative group cursor-pointer">
            <img
              src={user?.avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-[#0d9488] shadow-lg object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-icons text-white text-xl">edit</span>
            </div>

            {/* File Input */}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleAvatarUpload(file);
              }}
            />
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-3xl font-black text-slate-900">
              {user?.name}
            </h2>

            {/* Contact Email */}
            <p className="text-sm text-slate-500 font-medium mt-1">
              {user?.email}
            </p>

            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
              {user?.title}
            </p>
          </div>
        </div>

        {/* Avatar Actions */}
        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={handleRemoveAvatar}
            className="flex-1 md:flex-none py-3 px-8 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Remove Photo
          </button>

          <label className="flex-1 md:flex-none py-3 px-8 bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-2xl text-sm font-bold shadow-lg shadow-[#0d9488]/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons text-lg">upload</span>
            Upload New
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleAvatarUpload(file);
              }}
            />
          </label>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Left */}
        <div className="xl:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="p-6 border-b bg-slate-50/30 flex justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Personal Information
              </h3>
              <span className="material-icons text-slate-400">lock</span>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'First Name', value: user?.name.split(' ')[0] },
                { label: 'Last Name', value: user?.name.split(' ')[1] },
                { label: 'Job Title', value: user?.title },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {field.label}
                  </label>
                  <input
                    disabled
                    value={field.value}
                    className="w-full h-12 bg-slate-100 rounded-2xl px-5 text-slate-500 font-medium cursor-not-allowed"
                  />
                </div>
              ))}

              {/* Role */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Role
                </label>
                <select
                  disabled
                  className="w-full h-12 bg-slate-100 rounded-2xl px-5 text-slate-500 font-medium cursor-not-allowed"
                >
                  <option>{user?.role || 'Employee'}</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Right */}
        <div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm sticky top-24">
            <button
              disabled
              className="w-full py-4 bg-slate-300 text-white font-black rounded-2xl cursor-not-allowed"
            >
              Save Disabled
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
