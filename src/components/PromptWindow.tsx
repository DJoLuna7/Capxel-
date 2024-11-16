import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function PromptWindow() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    // Handle prompt submission
    setPrompt('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-xl transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-gray-200">Generate Ad Content</h2>
        <p className="text-sm text-gray-400 mt-1">
          Describe what kind of ad content you want to generate from your files
        </p>
      </div>
      <div className="flex-1 p-6">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full h-full bg-black rounded-xl p-4 text-gray-200 resize-none 
            focus:outline-none focus:ring-2 focus:ring-purple-600 border border-gray-800
            transition-all duration-300
            hover:border-purple-600/50 hover:shadow-[inset_0_0_10px_rgba(124,58,237,0.1)]"
        />
      </div>
      <div className="p-6 border-t border-gray-800">
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl 
            flex items-center justify-center gap-2 transition-all duration-300
            hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]
            transform hover:-translate-y-0.5"
        >
          <Send size={20} className="animate-float" />
          Generate
        </button>
      </div>
    </div>
  );
}