import React from 'react'
import './match.css'
function Match({ homeTeam, status, awayTeam, goals, venue, league }) {
  return (
    <div class="match">
      <div class="match-header">
        <div class="match-status">Live</div>
        <div class="match-tournament">
          <img src={league?.logo} alt={league?.name} />
          {league?.name}
        </div>
        <div class="match-actions">
          {/* <button class="btn-icon">
            <i class="material-icons-outlined">grade</i>
          </button>
          <button class="btn-icon">
            <i class="material-icons-outlined">add_alert</i>
          </button> */}
        </div>
      </div>
      <div class="match-content">
        <div class="column">
          <div class="team team--home">
            <div class="team-logo">
              <img src={homeTeam?.logo} alt="" />
            </div>
            <h2 class="team-name">{homeTeam?.name}</h2>
          </div>
        </div>
        <div class="column">
          <div class="match-details">
            {/* <div class="match-date">
              3 May at <strong>17:30</strong>
            </div> */}
            <div class="match-score">
              <span class="match-score-number match-score-number--leading">
                {goals?.home}
              </span>
              <span class="match-score-divider">:</span>
              <span class="match-score-number">{goals?.away}</span>
            </div>
            <div class="match-time-lapsed">{status?.elapsed}'</div>
            <div class="match-referee">
              venue: <strong>{venue?.name}</strong>
            </div>
            {/* <div class="match-bet-options">
              <button class="match-bet-option">1.48</button>
              <button class="match-bet-option">7.84</button>
              <button class="match-bet-option">3.24</button>
            </div>
            <button class="match-bet-place">Place a bet</button> */}
          </div>
        </div>
        <div class="column">
          <div class="team team--away">
            <div class="team-logo">
              <img src={awayTeam?.logo} alt="" />
            </div>
            <h2 class="team-name">{awayTeam?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match
