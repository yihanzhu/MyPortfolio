import React, { useState } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";

const TabWindow = ({ title, isAdmin, handleTabClick, handleConfirmTab }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [uploadFile, setUploadFile] = useState(null);
  const [confirmingTab, setConfirmingTab] = useState(false);
  const tabs = [
    { name: "FTP", content: "File Upload: FTP", isUploadEnabled: !isAdmin },
    {
      name: "HTTP/HTTPS",
      content: "File Upload: HTTP/HTTPS",
      isUploadEnabled: !isAdmin,
    },
    { name: "TCP", content: "File Upload: TCP", isUploadEnabled: !isAdmin },
    { name: "UDP", content: "File Upload: UDP", isUploadEnabled: !isAdmin },
    { name: "IPv4", content: "File Upload: IPv4", isUploadEnabled: !isAdmin },
    { name: "MAC", content: "File Upload: MAC", isUploadEnabled: !isAdmin },
  ];

  const handleTabChange = (index) => {
    if (isAdmin && !tabs[index].isUploadEnabled) {
      setActiveTab(index);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadFile(file);
  };

  const handleUpload = () => {
    if (uploadFile) {
      console.log(
        `Uploading file "${uploadFile.name}" to tab "${tabs[activeTab].name}"`
      );
      setUploadFile(null);
    }
  };

  const handleConfirm = () => {
    if (!confirmingTab) {
      setConfirmingTab(true);
    } else {
      setConfirmingTab(false);
      handleConfirmTab(activeTab);
    }
  };

  return (
    <div className="window">
      <h2>{title}</h2>
      <div className="tabContainer">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""} ${
              isAdmin ? "admin" : ""
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="contentContainer">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`content ${activeTab === index ? "active" : ""}`}
          >
            <p className={confirmingTab ? "confirming" : ""}>{tab.content}</p>
            {tab.isUploadEnabled && (
              <div className="uploadContainer">
                <input
                  type="file"
                  onChange={handleFileChange}
                  disabled={!isAdmin && !confirmingTab}
                />
                <button
                  onClick={handleUpload}
                  disabled={!isAdmin && !confirmingTab}
                >
                  Upload
                </button>
              </div>
            )}
            {uploadFile && <p>Selected File: {uploadFile.name}</p>}
          </div>
        ))}
      </div>
      {isAdmin && (
        <div className="confirmContainer">
          <button onClick={handleConfirm} disabled={activeTab === -1}>
            {confirmingTab ? "Cancel" : "Confirm"}
          </button>
        </div>
      )}

      <style jsx>{`
        .window {
          border: 1px solid gray;
          padding: 10px;
        }
        h2 {
          text-align: center;
        }
        .tabContainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
        }
        .tab {
          padding: 10px 20px;
          background-color: ${!isAdmin ? "green" : "red"};
          color: white;
          cursor: ${isAdmin ? "pointer" : "default"};
          text-align: center;
        }
        .tab.active {
          background-color: ${!isAdmin ? "red" : "green"};
        }
        .tab.admin {
          background-color: ${isAdmin ? "green" : "red"} !important;
          cursor: pointer;
        }
        .content {
          display: none;
          padding: 20px;
          border: 1px solid gray;
          text-align: center;
        }
        .content.active {
          display: block;
        }
        .uploadContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        input {
          padding: 10px;
          text-align: center;
        }
        button {
          padding: 10px 20px;
          background-color: green;
          color: white;
          cursor: pointer;
          text-align: center;
        }
        .confirming {
          color: red;
        }
        .confirmContainer {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

const InputWindow = ({ handleSend }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    handleSend(inputText);
    setInputText("");
  };

  return (
    <div className="window">
      <h2>Input Window</h2>
      <div className="inputContainer">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button onClick={handleButtonClick}>Send</button>
      </div>

      <style jsx>{`
        .window {
          border: 1px solid gray;
          padding: 10px;
        }
        h2 {
          text-align: center;
        }
        .inputContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        input {
          padding: 10px;
          text-align: center;
        }
        button {
          padding: 10px 20px;
          background-color: green;
          color: white;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const DisplayWindow = ({ text }) => {
  return (
    <div className="window">
      <h2>Display Window</h2>
      <div className="displayContainer">
        <p>{text}</p>
      </div>

      <style jsx>{`
        .window {
          border: 1px solid gray;
          padding: 10px;
        }
        h2 {
          text-align: center;
        }
        .displayContainer {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [confirmedTab, setConfirmedTab] = useState(-1);

  const handleSend = (text) => {
    setDisplayText(text);
  };

  const handleToggleAdmin = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  const handleConfirmTab = (tabIndex) => {
    setConfirmedTab(tabIndex);
  };

  return (
    <>
      <Head>
        <title>Yihan Zhu | Projects - Computer Network</title>
        <meta name="description" content="any desciption" />
      </Head>
      <AnimatedText
        text="Platform - under Construction"
        className="!text-6xl !text-left xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl "
      />
      <div className="container">
        <div className="column">
          <TabWindow
            title="Sender"
            isAdmin={isAdmin}
            handleTabClick={() => {}}
            handleConfirmTab={handleConfirmTab}
          />
        </div>
        <div className="column">
          <TabWindow
            title="Receiver"
            isAdmin={isAdmin}
            handleTabClick={() => {}}
            handleConfirmTab={() => {}}
          />
        </div>
        <div className="column">
          <InputWindow handleSend={handleSend} />
        </div>
        <div className="column">
          <DisplayWindow text={displayText} />
        </div>
        <button className="text-center" onClick={handleToggleAdmin}>
          {isAdmin ? "Switch to Normal User" : "Switch to Admin"}
        </button>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
            padding: 10px;
          }
          .column {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
