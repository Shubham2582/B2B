import React from 'react';
import { Users, Calendar, FileText, BarChart, Clock, UserPlus, Building2, Settings } from 'lucide-react';
import FeatureCard from './FeatureCard';

const GlyphFeatures = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-4">
          GlyphHR Core
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          Connect every aspect of your HR operations to build a dynamic workforce ecosystem.
          Soon, GlyphHR AI will transform it into a powerful asset — a second brain for your HR team.
        </p>

        <div className="grid grid-cols-12 gap-6">
          {/* Top Row */}
          <FeatureCard
            title="Manage Recruitment"
            description="Streamline your hiring process with AI-powered candidate screening"
            icon={UserPlus}
            className="col-span-3"
          />
          <FeatureCard
            title="Track Attendance"
            description="Monitor time, shifts, and overtime automatically"
            icon={Clock}
            className="col-span-3"
          />
          <div className="col-span-3 bg-gray-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <BarChart className="w-8 h-8 text-blue-400 mb-4" />
            <span className="text-white text-lg">Real-time Analytics</span>
          </div>
          <FeatureCard
            title="Employee Records"
            description="Centralize all employee information and documents"
            icon={Users}
            className="col-span-3"
          />

          {/* Middle Row */}
          <FeatureCard
            title="Leave Management"
            description="Handle leave requests and track balances"
            icon={Calendar}
            className="col-span-3"
          />

          {/* Central Feature */}
          <div className="col-span-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8">
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative bg-gray-900/50 p-8 rounded-full">
                  <Building2 className="w-12 h-12 text-blue-400" />
                </div>
                
                {/* Floating Feature Icons */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute top-0 -right-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute -bottom-4 left-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <Settings className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          <FeatureCard
            title="Performance Reviews"
            description="Conduct evaluations and track goals"
            icon={BarChart}
            className="col-span-3"
          />
        </div>

        {/* Bottom feature preview */}
        <div className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete HR Suite</h3>
              <p className="text-gray-400 max-w-xl">
                From recruitment to retirement, GlyphHR provides all the tools you need
                to manage your workforce effectively. Automate routine tasks and focus
                on what matters most - your people.
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlyphFeatures;