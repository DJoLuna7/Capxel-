import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FileUpload from './components/FileUpload';
import PromptWindow from './components/PromptWindow';
import PreviewWindow from './components/PreviewWindow';
import StorageFolder from './components/StorageFolder';

function App() {
  const [activeTab, setActiveTab] = useState('Upload Files');
  const [files, setFiles] = useState({
    inspex: null as File | null,
    productDesc: null as File | null,
    painPoints: null as File | null,
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'Upload Files':
        return (
          <div className="flex flex-col h-full p-8 gap-8">
            <div className="grid grid-cols-3 gap-6">
              <FileUpload
                label="Inspex File"
                file={files.inspex}
                onFileSelect={(file) => setFiles({ ...files, inspex: file })}
              />
              <FileUpload
                label="Product Description"
                file={files.productDesc}
                onFileSelect={(file) => setFiles({ ...files, productDesc: file })}
              />
              <FileUpload
                label="Pain Points"
                file={files.painPoints}
                onFileSelect={(file) => setFiles({ ...files, painPoints: file })}
              />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <PromptWindow />
              <PreviewWindow />
            </div>
          </div>
        );
      case 'Storage':
        return <StorageFolder />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-hidden">{renderContent()}</main>
    </div>
  );
}

export default App;