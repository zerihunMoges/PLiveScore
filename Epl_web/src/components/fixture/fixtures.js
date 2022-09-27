import React, { useContext } from 'react'
import { FixturesContext } from '../../matchcontext/fixturescontext'
import useMatches from '../../queryhooks/useMatches'
import Fixture from './fixture'

export default function Fixtures() {
  //   const [Fixtures, setFixtures] = useContext(FixturesContext)
  console.log('got here')
  const fixtures = useMatches()
  console.log(fixtures)
  return (
    <div className="Fixtures">
      {fixtures.isLoading ? (
        <p>isLoading .....</p>
      ) : (
        fixtures.map((fixture, index) => {
          return (
            <Fixture
              homeTeam={fixture.homeTeam}
              awayTeam={fixture.awayTeam}
              status={fixture.status}
              date={fixture.date}
              goals={fixture.goals}
            />
          )
        })
      )}
    </div>
  )
}
