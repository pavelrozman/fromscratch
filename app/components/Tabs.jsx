import React from 'react';

export default function Tabs({ tabs, activeTabId, onTabClick, onNewTab, onCloseTab }) {
  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`tab ${tab.id === activeTabId ? 'active' : ''}`}
            onClick={() => onTabClick(tab.id)}
          >
            <span className="tab-title">{tab.title}</span>
            {tabs.length > 1 && (
              <button className="close-tab" onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tab.id);
              }}>×</button>
            )}
          </div>
        ))}
      </div>
      <button className="new-tab" onClick={onNewTab}>+</button>
    </div>
  );
}