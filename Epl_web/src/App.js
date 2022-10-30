import { useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import MatchDetail from './matchdetail'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MatchProvider } from './matchcontext/matchcontext'
import { FixturesProvider } from './matchcontext/fixturescontext'
import { FixturesPageProvider } from './matchcontext/fixturespagecontext'
import ElevatedTabs from './components/header/header'
import { TabProvider } from './matchcontext/tabcontext'
const queryClient = new QueryClient()
const tele = window.Telegram.WebApp
function App() {
  useEffect(() => {
    tele.ready()
  })
  return (
    <TabProvider>
      <FixturesPageProvider>
        <MatchProvider>
          <FixturesProvider>
            <QueryClientProvider client={queryClient}>
              <Router>
                <Routes>
                  <Route path="/" element={<ElevatedTabs />} />
                  <Route path="/match/:id" element={<MatchDetail />} />
                </Routes>
              </Router>
            </QueryClientProvider>
          </FixturesProvider>
        </MatchProvider>
      </FixturesPageProvider>
    </TabProvider>
  )
}

export default App
