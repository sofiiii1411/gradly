import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Room3D from '../components/Room3D';
import { Thermometer, Fan, Lightbulb, DoorClosed, DoorOpen, Users, Settings2, AlertTriangle } from 'lucide-react';

const DigitalTwin = () => {
  const [temperature, setTemperature] = useState(25.8);
  const [isAuto, setIsAuto] = useState(true);
  
  // Derived state (BMS Automation Engine)
  const isHighTemp = temperature > 28;
  const fanOn = isAuto ? isHighTemp : false;
  const alertStatus = temperature > 32;

  // Simulate temperature changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => {
        // Simple simulation: goes up and down
        let change = (Math.random() - 0.4) * 0.5; // slight bias to increase
        if (fanOn) change -= 0.6; // cooling active
        
        let newTemp = prev + change;
        if (newTemp < 20) newTemp = 20;
        if (newTemp > 35) newTemp = 35;
        return newTemp;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [fanOn]);

  const roomData = {
    temperature,
    humidity: 45 + Math.floor(Math.random() * 2), // jitter
    occupancy: true,
    fanOn,
    lightOn: true,
    doorClosed: true,
    alert: alertStatus
  };

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      {/* 3D Canvas */}
      <div className="three-container">
        <Canvas camera={{ position: [10, 8, 12], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <Environment preset="city" />
          <Room3D data={roomData} />
          <OrbitControls 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2 - 0.05} // don't go below ground
            minDistance={5}
            maxDistance={25}
          />
          <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="overlay-ui">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <div className="glass-panel overlay-element" style={{padding: '16px', display: 'flex', gap: '12px', alignItems: 'center'}}>
            <div style={{background: 'rgba(6, 182, 212, 0.2)', padding: '8px', borderRadius: '8px'}}>
              <Settings2 color="var(--accent-cyan)" />
            </div>
            <div>
              <div style={{fontWeight: '700'}}>FLOOR 1 / ROOM 103</div>
              <div style={{fontSize: '0.875rem', color: 'var(--text-muted)'}}>Interactive 3D Digital Twin</div>
            </div>
          </div>
          
          {alertStatus && (
            <div className="glass-panel overlay-element" style={{padding: '16px', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid var(--status-danger)', display: 'flex', gap: '12px', alignItems: 'center', animation: 'pulseGlow 2s infinite'}}>
              <AlertTriangle color="var(--status-danger)" />
              <div style={{color: 'var(--status-danger)', fontWeight: '700'}}>CRITICAL TEMPERATURE ALERT</div>
            </div>
          )}
        </div>

        <div className="glass-panel room-info-card overlay-element">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
            <h3 style={{fontWeight: '600'}}>Live Status</h3>
            <span className={`status-indicator ${alertStatus ? 'value-danger' : (isHighTemp ? 'value-warning' : 'value-normal')}`} style={{animation: 'none', background: alertStatus ? 'var(--status-danger)' : (isHighTemp ? 'var(--status-warning)' : 'var(--status-normal)')}}></span>
          </div>

          <div className="sensor-list">
            <div className="sensor-item">
              <div className="sensor-left">
                <Thermometer size={16} />
                <span>Temperature</span>
              </div>
              <div className={`sensor-value ${alertStatus ? 'value-danger' : (isHighTemp ? 'value-warning' : 'value-normal')}`}>
                {temperature.toFixed(1)}°C
              </div>
            </div>
            
            <div className="sensor-item">
              <div className="sensor-left">
                <Fan size={16} />
                <span>HVAC / Fan</span>
              </div>
              <div className="sensor-value">
                {fanOn ? (
                  <span style={{color: 'var(--accent-blue)'}}>ON (Cooling)</span>
                ) : (
                  <span style={{color: 'var(--text-muted)'}}>OFF</span>
                )}
              </div>
            </div>

            <div className="sensor-item">
              <div className="sensor-left">
                <Users size={16} />
                <span>Occupancy</span>
              </div>
              <div className="sensor-value" style={{color: 'var(--status-normal)'}}>
                DETECTED
              </div>
            </div>

            <div className="sensor-item">
              <div className="sensor-left">
                <Lightbulb size={16} />
                <span>Lighting</span>
              </div>
              <div className="sensor-value" style={{color: 'var(--status-warning)'}}>
                ON
              </div>
            </div>
          </div>

          <div style={{marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)'}}>
            <h4 style={{fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px'}}>BMS Automation Engine</h4>
            <div style={{background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', fontSize: '0.875rem', fontFamily: 'monospace', color: 'var(--text-secondary)'}}>
              <div style={{color: isHighTemp ? 'var(--accent-cyan)' : 'var(--text-muted)'}}>
                {`> if (temp > 28°C) {`}
              </div>
              <div style={{paddingLeft: '16px', color: isHighTemp ? 'var(--text-primary)' : 'var(--text-muted)'}}>
                fan = ON;
              </div>
              <div style={{color: isHighTemp ? 'var(--accent-cyan)' : 'var(--text-muted)'}}>
                {`}`}
              </div>
            </div>
            
            <div style={{marginTop: '16px', display: 'flex', gap: '8px'}}>
              <button 
                onClick={() => setTemperature(prev => prev + 2.5)}
                style={{flex: 1, padding: '8px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: 'var(--status-danger)', borderRadius: '6px', cursor: 'pointer', fontWeight: '500'}}>
                + Heat Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwin;
