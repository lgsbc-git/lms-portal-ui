import React from "react";

const MyCourse: React.FC = () => {
  
  return (
    <main className="flex-grow container mx-auto px-6 py-10">

      {/* Welcome Section */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-2">
            Welcome back, Alex
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You have 2 courses due this week. Keep up the momentum!
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "In Progress", value: 6, color: "border-primary" },
          { label: "Pending Deadlines", value: 4, color: "border-yellow-500" },
          { label: "Completed", value: 4, color: "border-green-500" },
          { label: "Certificates", value: 2, color: "border-blue-500" },
        ].map((item) => (
          <div
            key={item.label}
            className={`bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border-l-4 ${item.color}`}
          >
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {item.label}
            </h3>
            <p className="text-3xl font-bold text-secondary dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-secondary dark:text-white mb-6">
          Continue Learning
        </h2>

        <div className="bg-secondary rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFUog0d5F4xMEb0rKPMe1qV2OFfW3blKyg0Rxyx1lzSewDmUJQTcle52b1DTHsXaTtKAxbNaLSL1iTaxky3-S2wjBlfZb6NcUkjsYLj1DmHv8ukwWpYE9c7bxunYrVGFUKgo31u_ARVF3zvzlANFy-J2_DNr5z7ami4A5izkGGPcfRGVdR2YjmdFWvlS3LEbWkYNl4Dq7YrE3Hzhu4eKWvjWuVS4oui2NC4QL7zjzQ4AgjHSCuy8lOUhAkuBGA21Yvlbh3E9Tp3sVZ"
              alt="Course"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-3/5 p-8 text-white">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
              AI Integration
            </span>

            <h3 className="text-2xl font-bold mt-4">
              Advanced Dynamics 365 Workflows
            </h3>

            <p className="text-gray-300 text-sm mt-2 mb-4">
              Learn how to automate complex business processes using AI-driven
              features in Dynamics 365.
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2 text-gray-300">
                <span>Module 3</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-primary h-2 rounded-full w-[65%]" />
              </div>
            </div>

            <button className="bg-primary px-6 py-3 rounded-lg font-medium">
              Resume Lesson
            </button>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="w-full">
  <div className="flex flex-col lg:flex-row gap-8">

    {/* LEFT COLUMN */}
    <div className="w-full lg:w-3/4">

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          <button className="border-primary text-primary py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2">
            <span className="material-icons text-base">school</span>
            In Progress
          </button>

          <button className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2">
            <span className="material-icons text-base">assignment_late</span>
            Mandatory
          </button>

          <button className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2">
            <span className="material-icons text-base">check_circle</span>
            Completed
          </button>
        </nav>
      </div>

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkpZXnNwiS6BrU8hzTpRNk65yAgYZv9MXZB_wdld6zDqTvSew6p2HUv_1lVie8-6yAXHMpqeM8-zAfMUMQ98Xfj3y7WKAxI2pb7gCQaUV9CKsSVcnyDw-hZwW6sr7Alhmm0T6Strzl_-8Bvol4L_iS0uC7oo1HfdTsez2q8hKl8JymtW0nJ0LpRhKRwBQgZlI0mg86B9-W3t1GYm3N9gvmKTROZL-dF9-i7NJZifz9062mCCk5_z3_ZCi9wo9sRGIDwBuHpzSpfiFU"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 text-xs font-bold px-2 py-1 rounded">
              Due in 3 Days
            </span>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <h4 className="font-bold text-lg text-secondary dark:text-white mb-2">
                Data Security Fundamentals
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Essential practices for protecting sensitive client data.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span>Progress</span>
                <span>30%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mb-4">
                <div className="bg-primary h-1.5 rounded-full w-[30%]" />
              </div>

              <button className="w-full py-2 border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                Continue
              </button>
            </div>
          </div>
        </div>

      {/* CARD 2 */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full group">
        <div className="relative h-48 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAajyaS_3CqFYy9Cph7U1ii0NITMZtOPVODJBdB_jY2g3vXT3L31t-vpi-4HkIRJ-S0FeRW2x-V3P2jqqqWyMp9-niRDoAXYBZgMdHLuYvRYcqrscJZRqRqKsuoZbKCbkEUZ5XbQCjCX5-zrICqsEoztV-FtOeQMzYkpcq1F7eNCgbQ4PoWCqQEz3VCo8VfMdpHk0P8MjccHEbgvE7lSw_rv13BMwziH4p6H_8d3gNsO8y-MeBCN2m4dXmM_Ylep51fffNgUSyP34at"
            alt="People working"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg text-secondary dark:text-white mb-2 group-hover:text-primary transition">
              Power Platform Basics
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Introduction to PowerApps, Automate, and BI for rapid business solutions.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>10%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
              <div className="bg-primary h-1.5 rounded-full w-[10%]" />
            </div>

            <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full group">
        <div className="relative h-48 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97CBTizVkikl9Qp6zqqF3VH56Y0jG_xH_vHVhVeryPMUEKTgyMK92s-hXX6q1a9gEYZNxafnz4FkVE6xD5M67f7_1oossTM78b3KH_Nsp2KoYwioYlpjP95zHzToFeMIRbR1vbq8XgTmLQi2N00rPm7ZeCCoxegZOnfUULILGKH3MI9S_kKabGySwaEsQhmAVJkz-zSf6XBW0UKCQBX-2A22E9RRAwwNa2ONnSSg8lrkdqy7j37EeOhGoEGtrtMcePkgxlAYirx0b"
            alt="Strategy meeting"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg text-secondary dark:text-white mb-2 group-hover:text-primary transition">
              Leadership in Tech
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Developing soft skills for managing remote and hybrid technical teams.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>85%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
              <div className="bg-primary h-1.5 rounded-full w-[85%]" />
            </div>

            <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* View All */}
    <div className="mt-8 flex justify-center">
      <button className="text-primary font-medium hover:underline flex items-center gap-1">
        View all enrolled courses
        <span className="material-icons text-sm">arrow_forward</span>
      </button>
    </div>
  </div>
</div>

      </section>

      

    </main>
  );
};

export default MyCourse;
