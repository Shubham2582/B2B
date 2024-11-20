import React from 'react';
import { Users, Video, MessageSquare, Layout, Settings, Grid } from 'lucide-react';
import CollaborationFeature from './CollaborationFeature';

const WorkTogetherSection = () => {
  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div className="fixed top-1/4 right-0 w-1/3 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 left-0 w-1/3 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Work together.
            <br />
            Like in the office.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create virtual HR workspaces for seamless collaboration. Handle recruitment, 
            onboarding, and employee management as a team in real-time.
          </p>
        </div>

        {/* Virtual Meeting Space */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 rounded-3xl" />
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 overflow-hidden">
            {/* Meeting Header */}
            <div className="p-4 border-b border-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">HR Team Sync</h3>
                    <p className="text-sm text-gray-400">8 participants • Weekly Review</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <Video className="w-5 h-5 text-gray-300" />
                  </button>
                  <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <MessageSquare className="w-5 h-5 text-gray-300" />
                  </button>
                  <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <Settings className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Meeting Grid */}
            <div className="grid grid-cols-4 gap-4 p-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-video bg-gray-800/50 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span className="text-sm text-white">HR Team Member {i + 1}</span>
                    <div className="flex gap-2">
                      <button className="p-1 bg-black/50 rounded hover:bg-black/70 transition-colors">
                        <Video className="w-4 h-4 text-gray-300" />
                      </button>
                      <button className="p-1 bg-black/50 rounded hover:bg-black/70 transition-colors">
                        <MessageSquare className="w-4 h-4 text-gray-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Recruitment Pipeline',
              participants: 4,
              time: '10:00 AM - 11:00 AM',
              type: 'Interview Panel'
            },
            {
              title: 'New Hire Onboarding',
              participants: 3,
              time: '11:30 AM - 12:30 PM',
              type: 'Orientation'
            },
            {
              title: 'Performance Reviews',
              participants: 5,
              time: '2:00 PM - 3:00 PM',
              type: 'Quarterly Review'
            }
          ].map((room, i) => (
            <div key={i} className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-medium mb-1">{room.title}</h3>
                  <p className="text-sm text-gray-400">{room.type}</p>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(room.participants)].map((_, j) => (
                    <div key={j} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{room.time}</span>
                <button className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8">
          <CollaborationFeature
            icon={Grid}
            title="Customizable Workspace"
            description="Create dedicated spaces for different HR functions and teams"
          />
          <CollaborationFeature
            icon={Video}
            title="Virtual Office Hours"
            description="Host office hours for employee questions and concerns"
          />
          <CollaborationFeature
            icon={MessageSquare}
            title="Team Communication"
            description="Built-in chat and messaging for quick team alignment"
          />
        </div>

        {/* Quick Access Toolbar */}
        <div className="fixed bottom-8 right-8 flex gap-3">
          <button className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800/50 hover:bg-gray-800 transition-colors">
            <MessageSquare className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800/50 hover:bg-gray-800 transition-colors">
            <Video className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800/50 hover:bg-gray-800 transition-colors">
            <Layout className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkTogetherSection;