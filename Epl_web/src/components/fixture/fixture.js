import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MatchContext } from '../../matchcontext/matchcontext'
import './fixture.css'

function Fixture({ opId, homeTeam, awayTeam, status, goals, date }) {
  const navigate = useNavigate()
  const [match, setMatch] = useContext(MatchContext)

  return (
    <div
      className="Fixture"
      onClick={() => {
        setMatch(opId)
        navigate(`/match/${opId}`)
      }}
    >
      <div className="FixtureTeam">
        <h1> {homeTeam.shortName} </h1>
        <img src={homeTeam.logo} alt="" />
      </div>

      <div className="FixtureTime">
        <h1> {new Date(date).toTimeString().slice(0, 5)}</h1>
        <h2> {new Date(date).toDateString().slice(0, 10)}</h2>
      </div>
      <div className="FixtureTeam">
        <img src={awayTeam.logo} alt="" />
        <h1> {awayTeam.shortName}</h1>
      </div>
    </div>
  )
}

export default Fixture
