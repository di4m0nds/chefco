import { Routes, Route, useLocation } from 'react-router-dom'

import './App.css'

import { Details, Home, NotFound, Shopping } from './pages'
import { Actions } from './components'

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="w-full relative">
      <Actions />

      <AnimatePresence initial={false} >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product/details/:id" element={<Details />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
