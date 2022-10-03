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
        <div className="lineup">
          <h3>Starting XI</h3>
          <ul>
            {startXI.map((pos) => (
              <li>
                {pos.player.number} {pos.player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="lineup">
          <h3>Substitutes</h3>
          <ul>
            {substitutes.map((pos) => (
              <li>
                {pos.player.number} {pos.player.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
