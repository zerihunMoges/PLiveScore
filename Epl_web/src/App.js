import { useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import MatchDetail from './matchdetail'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MatchProvider } from './matchcontext/matchcontext'
const queryClient = new QueryClient()
const tele = window.Telegram.WebApp
function App() {
  useEffect(() => {
    tele.ready()
  })
  return (
    <MatchProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match/:id" element={<MatchDetail />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </MatchProvider>
  )
}

export default App
