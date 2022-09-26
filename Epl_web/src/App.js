import { useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import MatchDetail from './matchdetail'

const tele = window.Telegram.WebApp
function App() {
  useEffect(() => {
    tele.ready()
  })
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/match'} element={<MatchDetail />} />
      </Routes>
    </Router>
  )
}

export default App
