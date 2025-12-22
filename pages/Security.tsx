import React, { useState } from 'react';

const Security: React.FC = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10">
      <header>
        <h1 className="text-4xl font-black text-slate-900">Security</h1>
        <p className="text-slate-500 text-lg">
          Update your account password.
        </p>
      </header>

      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="p-6 border-b bg-slate-50/30 flex justify-between">
          <h3 className="text-lg font-bold">Change Password</h3>
          <span className="material-icons text-slate-400">security</span>
        </div>

        <div className="p-10 space-y-8">
          {[
            { label: 'Current Password', name: 'currentPassword' },
            { label: 'New Password', name: 'newPassword' },
            { label: 'Confirm New Password', name: 'confirmPassword' },
          ].map((field, i) => (
            <div key={i} className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {field.label}
              </label>
              <input
                type="password"
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                className="w-full h-12 bg-slate-50 rounded-2xl px-5 focus:ring-2 focus:ring-[#0d9488]/30 outline-none font-medium"
              />
            </div>
          ))}

          <button className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-black rounded-2xl shadow-lg transition-all">
            Update Password
          </button>
        </div>
      </section>
    </div>
  );
};

export default Security;
