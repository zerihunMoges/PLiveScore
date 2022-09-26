import { useEffect } from 'react'
import '../App.css'
import Fixture from './fixture/fixtures'
import LiveMatch from './livematch'
import MatchDetail from '../matchdetail'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import matches from '../db/fixtures'
const tele = window.Telegram.WebApp
function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    tele.ready()
  })

  const fixtures = matches

  return (
    <div className="main">
      <h1 className="LiveMatchesHeader">Live Matches</h1>
      <div className="LiveMatches">
        <LiveMatch color={'#48CFAD'} />

        <LiveMatch color={'#FC6E51'} />
        <LiveMatch color={'#A0CECB'} />
        <LiveMatch color={'#F5F7FA'} />
        <LiveMatch color={'#656D78'} />
        <LiveMatch color={'#D8334A'} />
        <LiveMatch color={'#FC6E51'} />
      </div>
      <h2 className="LiveMatchesHeader">Today's Matches</h2>
      <div className="Fixtures">
        <div className="Fixtures">
          {fixtures.map((fixture, index) => {
            return <Fixture />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
