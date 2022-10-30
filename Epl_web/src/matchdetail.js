import React, { useContext, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import './matchdetail.css'
import Lineup from './components/lineup/lineup'
import BasicTabs, { TabPanel } from './components/matchdetail/tabs'
import { MatchContext } from './matchcontext/matchcontext'
import { useMatch } from './queryhooks/useMatch'
import { useNavigate, useParams } from 'react-router'
import { Button, CircularProgress } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

function MatchDetail() {
  const [value, setValue] = useState(0)
  const [match, setMatch] = useContext(MatchContext)
  const { id } = useParams()
  const m = useMatch(id)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { data, status } = m
  const navigate = useNavigate()
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ margin: 1 }}
      >
        {' '}
        <ArrowBackIosNewIcon />{' '}
      </Button>

      {status === 'loading' ? (
        <div className="loading">
          <CircularProgress sx={{ margin: '1rem' }} />
        </div>
      ) : status === 'success' ? (
        <div className="main">
          <div className="match">
            <div className="match-header">
              <div className="match-status">{data.status.long}</div>
              <div className="match-tournament">
                <img src={data.league.logo} />
                {data.league.name}
              </div>
              <div className="match-actions">
                {/* <button className="btn-icon">
            <i className="material-icons-outlined">grade</i>
          </button>
          <button className="btn-icon">
            <i className="material-icons-outlined">add_alert</i>
          </button> */}
              </div>
            </div>
            <div className="match-content">
              <div className="column">
                <div className="team team--home">
                  <div className="team-logo">
                    <img src={data.homeTeam.logo} />
                  </div>
                  <h2 className="team-name">{data.homeTeam.name}</h2>
                </div>
              </div>
              <div className="column">
                <div className="match-details">
                  <div className="match-date">
                    <span>
                      {new Date(data.date).toDateString().slice(0, 10)} at{' '}
                      {new Date(data.date).toTimeString().slice(0, 5)}
                    </span>
                  </div>
                  <div className="match-score">
                    <span className="match-score-number match-score-number--leading">
                      {data.goals.home}
                    </span>
                    <span className="match-score-divider">:</span>
                    <span className="match-score-number">
                      {data.goals.away}
                    </span>
                  </div>
                  <div className="match-time-lapsed">
                    {data.status.elapsed} mins
                  </div>
                  <div className="match-referee">
                    Referee:{' '}
                    <strong>{data.referee ? data.referee : 'TBC'}</strong>
                  </div>
                  {/* <div className="match-bet-options">
              <button className="match-bet-option">1.48</button>
              <button className="match-bet-option">7.84</button>
              <button className="match-bet-option">3.24</button>
            </div>
            <button className="match-bet-place">Place a bet</button> */}
                </div>
              </div>
              <div className="column">
                <div className="team team--away">
                  <div className="team-logo">
                    <img src={data.awayTeam.logo} />
                  </div>
                  <h2 className="team-name"> {data.awayTeam.name}</h2>
                </div>
              </div>
            </div>
          </div>
          <BasicTabs match={m} />
        </div>
      ) : (
        <p>error </p>
      )}
    </div>
  )
}

export default MatchDetail
