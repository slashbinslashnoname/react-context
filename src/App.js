/* eslint-disable no-console */
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'

import Home from './components/pages/Home'
import LiveChat from './components/pages/LiveChat'

import Lang from './context/lang'

export default function App() {
  const [context, setContext] = useState('fr')

  return (
    <Lang.Provider value={[context, setContext]}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path="/live_chat" element={<LiveChat />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </>
      </Router>
    </Lang.Provider>
  )
}
