import React from 'react';
import { ArrowRight } from 'lucide-react';

const MainHero = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col p-8 relative overflow-hidden">
      {/* Light beam effects */}
      <div className="fixed top-0 right-1/3 w-px h-screen bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-75" />
      <div className="fixed top-0 right-[32%] w-px h-screen bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
      
      {/* Ambient glow */}
      <div className="fixed top-[60%] right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="fixed top-[65%] right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />
      
      {/* Smoke effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.9),rgba(0,0,0,0.9))]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=20&h=20&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Everything HR
            <br />
            <span className="text-5xl">
              for your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                organization
              </span>
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl mb-8">
            GlyphHR, an open-source platform, serves as an all-in-one replacement for your 
            fragmented HR tools, payroll software, and employee management systems.
          </p>

          <button className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-75 blur group-hover:opacity-100 transition" />
            <div className="relative bg-black px-6 py-3 rounded-full inline-flex items-center gap-2">
              <span className="text-white font-medium">TRY IT FREE</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Interface Preview */}
        <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg border border-gray-800/50 shadow-2xl overflow-hidden">
          {/* Light fall effects */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          
          {/* HR Dashboard Preview */}
          <div className="p-6 relative">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Quick Stats */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-gray-400 text-sm mb-2">Total Employees</h3>
                <div className="text-2xl font-bold text-white">1,234</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-gray-400 text-sm mb-2">Attendance Rate</h3>
                <div className="text-2xl font-bold text-white">96.5%</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-gray-400 text-sm mb-2">Open Positions</h3>
                <div className="text-2xl font-bold text-white">23</div>
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  {[
                    "New employee onboarding - Sarah Johnson",
                    "Leave request approved - Marketing team",
                    "Performance review scheduled - Tech dept"
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4">Department Overview</h3>
                <div className="space-y-3">
                  {[
                    { dept: "Engineering", count: 45 },
                    { dept: "Marketing", count: 28 },
                    { dept: "HR", count: 12 }
                  ].map((dept, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{dept.dept}</span>
                      <span className="text-white">{dept.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;