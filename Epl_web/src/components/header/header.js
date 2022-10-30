import React, { useContext } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './header.css'
import { Typography } from '@mui/material'
import Home from '../home'
import Results from '../results'
import { TabContext } from '../../matchcontext/tabcontext'

function TabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ElevatedTabs = () => {
  const [value, setValue] = useContext(TabContext)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className="tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable force tabs example"
        >
          <Tab label="fixtures" {...a11yProps(0)} />
          <Tab label="results" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Results />
      </TabPanel>
    </>
  )
}

export default ElevatedTabs
