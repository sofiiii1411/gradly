# SentinelAI - Building Management System (Gradly)

SentinelAI is an intelligent, full-stack 3D Digital Twin Building Management System (BMS) with role-based access control, real-time environment monitoring, and security management.

## 🚀 Features

- **3D Digital Twin Visualization**: Interactive 3D room and floor visualization using Three.js and React Three Fiber.
- **Role-Based Access Control (RBAC)**:
  - **Floor Users**: Dedicated access restricted to their assigned floor and its 10 rooms (Floors 1 to 5).
  - **Security Super Admin**: Full facility surveillance, threat level controls, lockdown procedures, and audit logging.
  - **Global Admin**: Facility-wide telemetry, environmental statistics, HVAC automation, and administrative governance.
- **Real-Time Environment Monitoring**: Live metrics for temperature, humidity, air quality (AQI), power consumption, and room occupancy.
- **Backend API & Middleware**: Integrated Express server endpoints with authentication and authorization enforcement.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind/Modern CSS, Lucide React
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Backend**: Node.js, Express, REST APIs
- **Linting & Tooling**: Oxlint, TypeScript

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development Server

Start both the frontend and backend server with Vite:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 👥 Authorized Access Roles

- **Floor 1 User**: `floor1.sentinelai@gmail.com`
- **Floor 2 User**: `floor2.sentinelai@gmail.com`
- **Floor 3 User**: `floor3.sentinelai@gmail.com`
- **Floor 4 User**: `floor4.sentinelai@gmail.com`
- **Floor 5 User**: `floor5.sentinelai@gmail.com`
- **Security Super Admin**: `securitysuper.sentinelai@gmail.com`
- **Global Admin**: `global.sentinelai@gmail.com`
