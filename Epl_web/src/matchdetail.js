import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import './matchdetail.css'
import Lineup from './components/lineup/lineup'
import BasicTabs, { TabPanel } from './components/matchdetail/tabs'

function MatchDetail() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="main">
      <div className="LiveMatch">
        <div className="LiveMatchHeader">
          <h1>Premier League</h1>
          <h2>Week 10</h2>
        </div>

        <div className="LiveMatchDetail">
          <div className="LiveMatchTeam">
            <img src={require('./components/3newcastel.png')} alt="" />
            <h1> Newcastle</h1>
            <h2>Home</h2>
          </div>
          <div className="LiveMatchScore">
            <h1>
              <span>3 </span>: <span>0</span>
            </h1>
            <h2> 83 min</h2>
          </div>
          <div className="LiveMatchTeam">
            <img src={require('./components/bourn.png')} alt="" />
            <h1> Bournemouth</h1>
            <h2>Away</h2>
          </div>
        </div>
      </div>

      <BasicTabs />
    </div>
  )
}

export default MatchDetail
