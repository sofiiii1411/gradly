import React from 'react';
import { Thermometer, Droplets, Users, AlertCircle, Fan, Activity } from 'lucide-react';

const Overview = () => {
  return (
    <div className="content-padding">
      <div className="panel-header">
        <h2 className="panel-title">Building 01 — Live Overview</h2>
      </div>

      <div className="dashboard-grid">
        <div className="glass-panel stat-card">
          <div className="stat-header">
            <span className="stat-label">Active Alerts</span>
            <AlertCircle className="stat-icon" style={{color: 'var(--status-danger)'}} size={20} />
          </div>
          <div className="stat-value">2</div>
          <div className="stat-label" style={{color: 'var(--status-danger)'}}>Requires attention</div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-header">
            <span className="stat-label">Avg Temperature</span>
            <Thermometer className="stat-icon" size={20} />
          </div>
          <div className="stat-value">27.4°C</div>
          <div className="stat-label">Target: 24.0°C</div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-header">
            <span className="stat-label">Avg Humidity</span>
            <Droplets className="stat-icon" style={{color: 'var(--accent-blue)'}} size={20} />
          </div>
          <div className="stat-value">61%</div>
          <div className="stat-label">Normal Range</div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-header">
            <span className="stat-label">Occupancy</span>
            <Users className="stat-icon" style={{color: 'var(--accent-purple)'}} size={20} />
          </div>
          <div className="stat-value">12</div>
          <div className="stat-label">Across 50 Rooms</div>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="glass-panel panel-content" style={{padding: '24px'}}>
          <div className="panel-header">
            <h3 className="panel-title">System Status</h3>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{background: 'rgba(59, 130, 246, 0.1)', padding: '10px', borderRadius: '8px'}}>
                  <Fan style={{color: 'var(--accent-blue)'}} />
                </div>
                <div>
                  <div style={{fontWeight: '600'}}>HVAC System</div>
                  <div style={{fontSize: '0.875rem', color: 'var(--text-muted)'}}>Mode: AUTO</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', color: 'var(--status-normal)'}}>
                Running Optimal
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{background: 'rgba(16, 185, 129, 0.1)', padding: '10px', borderRadius: '8px'}}>
                  <Activity style={{color: 'var(--status-normal)'}} />
                </div>
                <div>
                  <div style={{fontWeight: '600'}}>Air Quality Index</div>
                  <div style={{fontSize: '0.875rem', color: 'var(--text-muted)'}}>Level: NORMAL</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', color: 'var(--status-normal)'}}>
                Good (42 AQI)
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel panel-content" style={{padding: '24px'}}>
          <div className="panel-header">
            <h3 className="panel-title">Quick Actions</h3>
          </div>
          <div style={{display: 'grid', gap: '12px'}}>
            <button style={{padding: '16px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s'}}>
              Override HVAC All Floors
            </button>
            <button style={{padding: '16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s'}}>
              Lockdown Protocol
            </button>
            <button style={{padding: '16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s'}}>
              Generate Daily Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
