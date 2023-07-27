import React, { useState } from "react";

const UserSection = ({
  selectedTab,
  onUpload,
  tabColors,
  side,
  fileUploads,
  setFileUploads,
  setMessage,
  selectedTabName,
  confirmedTabs,
}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(selectedTab, file.name, side);
      const newFileUploads = [...fileUploads];
      newFileUploads[selectedTab] = true; // update the tab index with file upload
      setFileUploads(newFileUploads);
    }
  };

  const isUploadEnabled = confirmedTabs.includes(selectedTab);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-200 border rounded-md">
      <h2 className="mb-4 text-lg font-bold">
        {`Upload to ${side}'s ${selectedTabName}`}
      </h2>
      <input className="text-center" type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className={` rounded-md  p-2 text-white ${
          isUploadEnabled ? "bg-blue-500" : "bg-gray-300"
        }`}
        disabled={!isUploadEnabled}
      >
        Upload
      </button>
    </div>
  );
};

export default UserSection;
