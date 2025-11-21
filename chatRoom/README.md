# Chat Room Projects - Node.js File System & HTTP Server

This folder contains multiple Node.js projects demonstrating file system operations, JSON manipulation, and HTTP server with event emitters.

## Projects Included

### 1. Config Manager
**Files:** `config.json`, `configManager.js`

**Description:** Demonstrates reading and updating a JSON configuration file.

**Usage:**
```powershell
node configManager.js
```

**Features:**
- Reads `config.json` with initial settings (version: 1.0.0, mode: development)
- Updates version to 2.0.0 and mode to production
- Writes the updated config back to file

---

### 2. Student Management System
**Files:** `student.json`, `studentManager.js`

**Description:** Complete CRUD operations for student records using Node.js fs module.

**Usage:**
```powershell
node studentManager.js
```

**Features:**
- **Read:** Display all students from JSON file
- **Add:** Add new student record
- **Search:** Find student by roll number
- **Update:** Modify student marks
- **Delete:** Remove student record

**Initial Data:** Contains 5 students with roll numbers 101-105

---

### 3. Page Visit Counter HTTP Server
**Files:** `pageCounterServer.js`

**Description:** HTTP server that tracks page visits using EventEmitter.

**Usage:**
```powershell
node pageCounterServer.js
```

**Features:**
- Tracks visits to `/home`, `/about`, and `/contact` pages
- Uses EventEmitter pattern to log page visits
- Displays visit counts on each page
- Real-time console logging of page visits

**Access:**
- Home: http://localhost:3001/home
- About: http://localhost:3001/about
- Contact: http://localhost:3001/contact

---

## Installation

No additional dependencies required - uses only Node.js built-in modules:
- `fs` (File System)
- `http` (HTTP Server)
- `events` (EventEmitter)
- `path` (Path utilities)

## Requirements

- Node.js v14 or higher

## Quick Start

```powershell
# Navigate to chatRoom directory
cd c:\Users\himan\Desktop\int222\chatRoom

# Test config manager
node configManager.js

# Test student manager
node studentManager.js

# Start HTTP server
node pageCounterServer.js
```

## Notes

- All file operations use asynchronous methods (callbacks) for config manager
- Student manager uses synchronous methods for simplicity in demo mode
- HTTP server runs on port 3001 (change PORT constant if needed)
- Event emitter logs all page visits to console in real-time
