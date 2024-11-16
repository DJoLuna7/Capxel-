import React from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export default function FileUpload({ label, file, onFileSelect }: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileSelect(selectedFile);
  };

  return (
    <div className="w-full group">
      <label className="text-sm font-medium text-gray-400 mb-2 block">
        {label}
      </label>
      <div className={`
        border-2 border-dashed rounded-xl p-4
        ${file ? 'border-purple-600 bg-purple-600/10' : 'border-gray-800 hover:border-purple-600'}
        transition-all duration-300 cursor-pointer relative
        hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]
        transform hover:-translate-y-1
        before:absolute before:inset-0 before:rounded-xl
        before:bg-gradient-to-b before:from-transparent before:to-black/5
        before:opacity-0 before:transition-opacity hover:before:opacity-100
      `}>
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        {file ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <File size={20} className="text-purple-600" />
              <span className="text-gray-200">{file.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFileSelect(null);
              }}
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <Upload size={24} className="group-hover:animate-float" />
            <span>Drop your file here or click to browse</span>
          </div>
        )}
      </div>
    </div>
  );
}