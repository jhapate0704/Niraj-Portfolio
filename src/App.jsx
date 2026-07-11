import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Engage from './pages/Engage'
import ProjectOverview from './pages/ProjectOverview'

function App() {
  return (
    <div className="bg-theme-4 min-h-screen text-theme-5 font-sans selection:bg-theme-2/30 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/project/:id" element={<ProjectOverview />} />
      </Routes>
    </div>
  )
}

export default App
