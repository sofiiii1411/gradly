import React, { useState } from 'react';
import './App.css';
import { 
  Building2, LayoutDashboard, Grid, Box, Fan, 
  Wind, Zap, Shield, Users, AlertTriangle, 
  BarChart3, History, FileText, Bell, 
  Server, Settings, Cpu
} from 'lucide-react';
import Overview from './pages/Overview';
import DigitalTwin from './pages/DigitalTwin';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <Overview />;
      case '3d-building':
        return <DigitalTwin />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-icon">
            <Building2 size={20} />
          </div>
          <div className="brand-title">BMS SentinelAI</div>
        </div>
        
        <div className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main</div>
            <div className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              <LayoutDashboard />
              <span>Overview</span>
            </div>
            <div className={`nav-item ${activeTab === '3d-building' ? 'active' : ''}`} onClick={() => setActiveTab('3d-building')}>
              <Box />
              <span>3D Digital Twin</span>
            </div>
            <div className={`nav-item ${activeTab === 'rooms' ? 'active' : ''}`} onClick={() => setActiveTab('rooms')}>
              <Grid />
              <span>Rooms</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Building</div>
            <div className="nav-item"><Building2 /><span>Floors</span></div>
            <div className="nav-item"><Fan /><span>HVAC & Climate</span></div>
            <div className="nav-item"><Wind /><span>Air Quality</span></div>
            <div className="nav-item"><Zap /><span>Energy</span></div>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Security</div>
            <div className="nav-item"><Shield /><span>Access Control</span></div>
            <div className="nav-item"><Users /><span>Occupancy</span></div>
            <div className="nav-item"><AlertTriangle /><span>Security Events</span></div>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Analytics</div>
            <div className="nav-item"><BarChart3 /><span>Live Analytics</span></div>
            <div className="nav-item"><History /><span>Historical Data</span></div>
            <div className="nav-item"><FileText /><span>Reports</span></div>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">System</div>
            <div className="nav-item"><Bell /><span>Alerts</span></div>
            <div className="nav-item"><Server /><span>Devices</span></div>
            <div className="nav-item"><Cpu /><span>Automation Rules</span></div>
            <div className="nav-item"><Settings /><span>Settings</span></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <div className="system-status">
              <span className="status-indicator status-online"></span>
              SYSTEM ONLINE
            </div>
          </div>
          <div className="topbar-right">
            <div className="user-profile">
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: '0.875rem', fontWeight: '600'}}>Admin User</div>
                <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>Facility Manager</div>
              </div>
              <div className="avatar">A</div>
            </div>
          </div>
        </header>
        
        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
