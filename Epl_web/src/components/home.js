import { useEffect } from 'react'
import '../App.css'
import Fixture from './fixture/fixture'
import LiveMatch from './livematch'

import { useNavigate } from 'react-router-dom'

import useFixtures from '../queryhooks/useMatches'

function Home() {
  const fixtures = useFixtures()
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
        {fixtures.isLoading ? (
          <p>isLoading .....</p>
        ) : !fixtures.isSuccess ? (
          <p>error</p>
        ) : (
          fixtures.data.map((match, index) => {
            return (
              <Fixture
                key={match.opId}
                opId={match.opId}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                status={match.status}
                date={match.date}
                goals={match.goals}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Home
