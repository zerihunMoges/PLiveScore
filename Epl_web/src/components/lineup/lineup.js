import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'

import PersonIcon from '@mui/icons-material/Person'
import { Box, Chip, Stack, Typography } from '@mui/material'
import './lineup.css'

export default function Lineup({ startXI, formation, substitutes, coach }) {
  startXI = startXI ? startXI : []
  substitutes = substitutes ? substitutes : []

  return (
    <div>
      <main className="lineups">
        <div className="lineup left">
          <h1 className="lineuptext">Starting XI</h1>
          <ul>
            {startXI.map((pos) => (
              <li className="playername">
                {pos.player.number} {pos.player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="lineup">
          <h1 className="lineuptext">Substitutes</h1>
          <ul>
            {substitutes.map((pos) => (
              <li className="playername">
                {pos.player.number} {pos.player.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
