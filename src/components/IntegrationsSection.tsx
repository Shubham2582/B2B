import React from 'react';
import { Link2, Database, Shield, Boxes, Activity, Filter, Users, Calendar } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Ambient lighting effects */}
      <div className="fixed top-1/3 right-0 w-1/3 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/3 left-0 w-1/3 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-white mb-4">
          Sync with everything.
          <br />
          Both ways.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Seamlessly integrate your HR processes with existing business tools. Synchronize data
          across your tech stack while maintaining security and compliance.
        </p>

        {/* Integration Interface Preview */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800/50 overflow-hidden mb-16">
          {/* Interface Header */}
          <div className="border-b border-gray-800/50 p-4">
            <div className="flex items-center space-x-4">
              <Link2 className="w-5 h-5 text-blue-400" />
              <div className="flex space-x-3">
                <span className="text-gray-200">glyph-hr</span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-200">integrations</span>
              </div>
            </div>
          </div>

          {/* Integration Status Cards */}
          <div className="p-6">
            <div className="grid gap-4">
              {[
                {
                  name: 'Workday Integration',
                  type: 'HRIS',
                  status: 'Connected',
                  lastSync: '5 mins ago',
                  details: 'Employee data sync active'
                },
                {
                  name: 'ADP Payroll',
                  type: 'Payroll',
                  status: 'Syncing',
                  lastSync: 'In progress',
                  details: 'Payroll data transfer'
                },
                {
                  name: 'Microsoft 365',
                  type: 'Authentication',
                  status: 'Connected',
                  lastSync: '2 mins ago',
                  details: 'SSO and user management'
                }
              ].map((integration, i) => (
                <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Database className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-gray-200">{integration.name}</h3>
                        <span className="text-sm text-gray-500">{integration.type}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      integration.status === 'Connected' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{integration.details}</span>
                    <span className="text-gray-500">{integration.lastSync}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Link2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-medium mb-2">Two-way sync</h3>
            <p className="text-gray-400 text-sm">
              Bidirectional data synchronization ensures consistency across all your HR systems
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-medium mb-2">Secure transfer</h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade security with encrypted data transmission and compliance controls
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Boxes className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-medium mb-2">Multiple systems</h3>
            <p className="text-gray-400 text-sm">
              Connect with various HRIS, payroll, and enterprise systems seamlessly
            </p>
          </div>
        </div>

        {/* Integration Workflow Preview */}
        <div className="bg-gradient-to-r from-blue-500/10 via-gray-800/50 to-cyan-500/10 rounded-xl p-8">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl text-white">Smart Data Mapping</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Intelligent field mapping ensures your HR data flows correctly between systems,
                maintaining data integrity and reducing manual work.
              </p>
              <div className="space-y-2">
                {[
                  'Automatic field detection',
                  'Custom mapping rules',
                  'Data validation checks'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50 w-96">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-200">Data Mapping</span>
                <Filter className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Employee ID</span>
                  </div>
                  <span className="text-gray-500">→</span>
                  <span className="text-gray-300">worker_id</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Start Date</span>
                  </div>
                  <span className="text-gray-500">→</span>
                  <span className="text-gray-300">hire_date</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;