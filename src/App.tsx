// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwind from './assets/tailwind.svg'

function App() {
  return (
    <>
      <header className='flex px-[31px] pt-[21px] pb-[22px] items-center gap-5 border-b-[1px] border-teal-700 border-opacity-15'>
        <h1>REACT EDITOR Test</h1>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={tailwind} className="logo w-8 h-8" alt="React logo" />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
