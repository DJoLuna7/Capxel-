import React from 'react';
import { Upload, FolderOpen, Settings } from 'lucide-react';

const navItems = [
  { icon: Upload, label: 'Upload Files' },
  { icon: FolderOpen, label: 'Storage' },
  { icon: Settings, label: 'Settings' }
];

export default function Sidebar({ activeTab, setActiveTab }: { 
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div className="w-20 bg-black h-screen flex flex-col items-center py-8 border-r border-gray-800">
      <div className="w-12 h-12 bg-purple-600 rounded-xl mb-8 flex items-center justify-center">
        <span className="text-white font-bold text-xl">C</span>
      </div>
      <div className="flex flex-col gap-6">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`p-3 rounded-xl transition-all ${
              activeTab === label
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:bg-purple-600/10 hover:text-purple-600'
            }`}
          >
            <Icon size={24} />
          </button>
        ))}
      </div>
    </div>
  );
}