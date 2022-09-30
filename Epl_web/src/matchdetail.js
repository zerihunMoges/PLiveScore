import React, { useContext, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import './matchdetail.css'
import Lineup from './components/lineup/lineup'
import BasicTabs, { TabPanel } from './components/matchdetail/tabs'
import { MatchContext } from './matchcontext/matchcontext'
import { useMatch } from './queryhooks/useMatch'
import { useParams } from 'react-router'

function MatchDetail() {
  const [value, setValue] = useState(0)
  const [match, setMatch] = useContext(MatchContext)
  const { id } = useParams()
  const m = useMatch(id)
  useEffect(() => {
    setMatch(m)
  })
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { data, status } = m

  return (
    <div className="main">
      {status === 'loading' ? (
        <p>Loading</p>
      ) : (
        <div className="LiveMatch">
          <div className="LiveMatchHeader">
            <h1>{data.league.name}</h1>
            <h2>{data.round}</h2>
          </div>

          <div className="LiveMatchDetail">
            <div className="LiveMatchTeam">
              <img src={data.homeTeam.logo} alt="" />
              <h1> {data.homeTeam.name}</h1>
              <h2>Home</h2>
            </div>
            <div className="LiveMatchScore">
              <h1>
                <span>{data.goals.home}</span>
                <span>:</span> <span>{data.goals.away}</span>
              </h1>
              <h2> {data.status.elapsed} min</h2>
            </div>
            <div className="LiveMatchTeam">
              <img src={data.awayTeam.logo} alt="" />
              <h1> {data.awayTeam.name}</h1>
              <h2>Away</h2>
            </div>
          </div>
        </div>
      )}
      <BasicTabs />
    </div>
  )
}

export default MatchDetail
