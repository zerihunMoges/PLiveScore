import React, { useContext, useState } from 'react'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Lineup from '../lineup/lineup'
import { MatchContext } from '../../matchcontext/matchcontext'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import SportsIcon from '@mui/icons-material/Sports'
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft'
export function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs({ match }) {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const icons = {
    Goal: <SportsSoccerIcon />,
    Card: <SportsIcon />,
    subst: <SwitchLeftIcon />
  }
  return !match ? (
    <p>wait</p>
  ) : match.status === 'loading' ? (
    <p>Loading ...</p>
  ) : (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Statistics" {...a11yProps(0)} />
          <Tab label="TimeLine" {...a11yProps(1)} />
          <Tab label={`${match.data.homeTeam.name} Lineup`} {...a11yProps(2)} />
          <Tab label={`${match.data.awayTeam.name} Lineup`} {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={1}>
        <Timeline position="alternate" sx={{ fontSize: '5%' }}>
          {match.data.events.map((event, index) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {event.time.elapsed}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>{icons[event.type]}</TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {event.type}
                  </Typography>
                  <Typography>{event.player.name}</Typography>
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </TabPanel>

      <TabPanel value={value} index={0}>
        Coming Soon!
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Lineup
          startXI={match.data.lineups.home.startXI}
          substitutes={match.data.lineups.home.substitutes}
          formation={match.data.lineups.home.formation}
          coach={match.data.lineups.home.coach}
        />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Lineup
          startXI={match.data.lineups.away.startXI}
          substitutes={match.data.lineups.away.substitutes}
          formation={match.data.lineups.away.formation}
          coach={match.data.lineups.away.coach}
        />
      </TabPanel>
    </Box>
  )
}
