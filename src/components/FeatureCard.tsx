import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className }) => (
  <div className={`bg-gray-900 rounded-3xl overflow-hidden backdrop-blur-sm relative group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="p-6 relative z-10">
      <h3 className="text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="mt-4 p-4 bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
    </div>
  </div>
);

export default FeatureCard;