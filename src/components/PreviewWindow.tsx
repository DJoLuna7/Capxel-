import React from 'react';

export default function PreviewWindow() {
  return (
    <div className="h-full bg-gray-900 rounded-xl flex flex-col transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-gray-200">Preview</h2>
      </div>
      <div className="flex-1 p-6">
        <div className="h-full bg-black rounded-xl p-4 border border-gray-800
          transition-all duration-300
          hover:border-purple-600/50 hover:shadow-[inset_0_0_10px_rgba(124,58,237,0.1)]">
          <div className="text-gray-400">
            Generated content will appear here...
          </div>
        </div>
      </div>
    </div>
  );
}