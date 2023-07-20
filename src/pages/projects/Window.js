import React from "react";
import Tab from "./Tab";

const Window = ({
  isAdmin,
  selectedTabFromAdmin,
  selectedTabFromUser,
  onTabSelect,
  tabColors,
  name,
  fileUploads,
}) => {
  return (
    <div className="grid grid-rows-4 gap-4 text-center p-2 bg-gray-200 border rounded-md ">
      <h2 className="text-center mb-4 text-lg font-bold">{name}</h2>
      <div className="col-span-1 flex justify-between gap-2">
        <h2 className="text-center mb-4 font-bold">Application Layer</h2>
        <div className="col-span-1 flex justify-between gap-2">
          <Tab
            color={tabColors[0]}
            isUploaded={fileUploads[0]}
            onClick={() => isAdmin && onTabSelect(0, "FTP")}
          >
            FTP
          </Tab>
          <Tab
            color={tabColors[1]}
            isUploaded={fileUploads[1]}
            onClick={() => isAdmin && onTabSelect(1, "HTTP/HTTPS")}
          >
            HTTP/HTTPS
          </Tab>
        </div>
      </div>
      <div className="col-span-1 flex justify-between w-auto gap-2">
        <h2 className="text-center mb-4 font-bold">Transport Layer</h2>
        <div className="col-span-1 flex justify-between gap-2">
          <Tab
            color={tabColors[2]}
            isUploaded={fileUploads[2]}
            onClick={() => isAdmin && onTabSelect(2, "TCP")}
          >
            TCP
          </Tab>
          <Tab
            color={tabColors[3]}
            isUploaded={fileUploads[3]}
            onClick={() => isAdmin && onTabSelect(3, "UDP")}
          >
            UDP
          </Tab>
        </div>
      </div>
      <div className="col-span-1 flex justify-between w-auto gap-2">
        <h2 className="text-center mb-4 font-bold">Network Layer</h2>
        <Tab
          color={tabColors[4]}
          isUploaded={fileUploads[4]}
          onClick={() => isAdmin && onTabSelect(4, "IPv4")}
        >
          IPv4
        </Tab>
      </div>
      <div className="col-span-1 flex justify-between w-auto gap-2">
        <h2 className="text-center mb-4 font-bold">Data Link Layer</h2>
        <Tab
          color={tabColors[5]}
          isUploaded={fileUploads[5]}
          onClick={() => isAdmin && onTabSelect(5, "MAC")}
        >
          MAC
        </Tab>
      </div>
    </div>
  );
};

export default Window;
