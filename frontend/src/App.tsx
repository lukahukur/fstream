import React, { useState } from 'react'
import Header from './components/Header'
import Landing from './pages'
import { Route, Routes, useLocation } from 'react-router-dom'
import Fs from './components/fsLayout/fs'
import Share from './pages/Share/Share'
import Get from './pages/Get/Get'

function App() {
  const location = useLocation()
  return (
    <>
      <div
        className={`${
          location.pathname.includes('/fs') ? 'border-b' : ''
        } absolute w-full bg-white flex items-center h-16`}>
        <Header />
      </div>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/fs'} element={<Fs />}>
          <Route path={'/fs/share'} element={<Share />} />
          <Route path={'/fs/jstream'} element={<Get />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
