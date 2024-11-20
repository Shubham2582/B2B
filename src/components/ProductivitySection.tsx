import React from 'react';
import { Command, Calendar, Bell, Search, Users, FileText, Clock, ChevronRight, CheckCircle } from 'lucide-react';

const ProductivitySection = () => {
  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.9),rgba(0,0,0,0.9))]" />
      
      {/* Ambient glow */}
      <div className="fixed top-1/4 right-0 w-1/3 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 left-0 w-1/3 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Unmatched productivity
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            GlyphHR is a process, people, and performance management platform that provides 
            powerful automation for HR teams of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          {/* Command Palette */}
          <div>
            <h3 className="flex items-center gap-2 text-xl text-white mb-4">
              <Command className="w-5 h-5" />
              Quick Actions
            </h3>
            <p className="text-gray-400 mb-6">
              Access any HR function instantly with smart commands and shortcuts.
            </p>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 p-4">
              <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg mb-4">
                <Command className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Create onboarding task..."
                  className="bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none flex-1"
                />
                <span className="text-xs text-gray-500">⌘K</span>
              </div>

              <div className="space-y-2">
                {[
                  { action: 'Create employee profile', shortcut: '⌘N' },
                  { action: 'Schedule interview', shortcut: '⌘I' },
                  { action: 'Review leave request', shortcut: '⌘L' },
                  { action: 'Generate payroll report', shortcut: '⌘R' }
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.action}
                    </span>
                    <span className="text-xs text-gray-500">{item.shortcut}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Team Planner */}
          <div>
            <h3 className="flex items-center gap-2 text-xl text-white mb-4">
              <Calendar className="w-5 h-5" />
              Team Planner
            </h3>
            <p className="text-gray-400 mb-6">
              Keep track of HR tasks and deadlines in one centralized calendar.
            </p>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6">
              <div className="space-y-4">
                {[
                  {
                    title: 'Review candidate applications',
                    priority: 'High',
                    team: 'Recruitment',
                    due: 'Today'
                  },
                  {
                    title: 'Monthly payroll processing',
                    priority: 'Medium',
                    team: 'Finance',
                    due: 'Tomorrow'
                  }
                ].map((task, i) => (
                  <div key={i} className="flex items-start justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <h4 className="text-gray-200 mb-1">{task.title}</h4>
                        <span className="text-sm text-gray-500">{task.team}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.priority === 'High' 
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {task.priority}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{task.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Smart HR Assistant */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 via-gray-800/50 to-cyan-500/10 rounded-xl p-8">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Command className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl text-white">AI-Powered HR Assistant</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Let our AI assist with employee queries, documentation, and HR processes.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Ask anything about HR processes..."
                        className="bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none flex-1"
                      />
                    </div>
                    <div className="space-y-2">
                      {[
                        'How do I process a leave request?',
                        'Generate an offer letter template',
                        'Update employee benefits policy'
                      ].map((suggestion, i) => (
                        <button
                          key={i}
                          className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="w-80">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <h4 className="text-white font-medium mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Users, label: 'Employee Directory' },
                      { icon: FileText, label: 'Document Templates' },
                      { icon: Clock, label: 'Time Tracking' }
                    ].map((action, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <action.icon className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{action.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification System */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
            <Bell className="w-10 h-10 text-blue-400" />
          </div>
          <h3 className="text-xl text-white mb-2">Smart Notifications</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Stay updated with AI-prioritized HR notifications. Never miss important 
            deadlines or employee requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;