import React, { useState } from 'react';

const Window = ({ title }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'Tab 1', content: 'This is the content of Tab 1' },
    { name: 'Tab 2', content: 'This is the content of Tab 2' },
    { name: 'Tab 3', content: 'This is the content of Tab 3' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="window">
      <h2>{title}</h2>
      <div className="tabContainer">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="contentContainer">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`content ${activeTab === index ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .window {
          border: 1px solid gray;
          padding: 10px;
        }
        .tabContainer {
          display: flex;
        }
        .tab {
          padding: 10px 20px;
          background-color: red;
          color: white;
          cursor: pointer;
        }
        .tab.active {
          background-color: green;
        }
        .content {
          display: none;
          padding: 20px;
          border: 1px solid gray;
        }
        .content.active {
          display: block;
        }
      `}</style>
    </div>
  );
};