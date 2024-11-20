import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CollaborationFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CollaborationFeature: React.FC<CollaborationFeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-4 relative">
      <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-20 blur group-hover:opacity-30" />
      <div className="relative w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
    </div>
    <h3 className="text-white font-medium mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default CollaborationFeature;