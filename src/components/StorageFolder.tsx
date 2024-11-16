import React from 'react';
import { File, Download, Trash2 } from 'lucide-react';

interface StorageFile {
  id: string;
  name: string;
  date: string;
  size: string;
}

const mockFiles: StorageFile[] = [
  { id: '1', name: 'ad_campaign_1.txt', date: '2024-03-10', size: '24 KB' },
  { id: '2', name: 'product_desc.txt', date: '2024-03-09', size: '12 KB' },
];

export default function StorageFolder() {
  return (
    <div className="h-full p-6">
      <h2 className="text-lg font-semibold text-gray-200 mb-4">Generated Files</h2>
      <div className="space-y-2">
        {mockFiles.map((file) => (
          <div
            key={file.id}
            className="bg-gray-900 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-800 transition-colors border border-gray-800"
          >
            <div className="flex items-center gap-3">
              <File size={20} className="text-purple-600" />
              <div>
                <p className="text-gray-200">{file.name}</p>
                <p className="text-sm text-gray-400">
                  {file.date} • {file.size}
                </p>
              </div>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-black rounded-lg text-gray-400 hover:text-purple-600">
                <Download size={18} />
              </button>
              <button className="p-2 hover:bg-black rounded-lg text-gray-400 hover:text-purple-600">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}