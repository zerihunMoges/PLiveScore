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
      <div className="FixtureTeams">
        <div className="FixtureTeam">
          <img src={homeTeam.logo} alt="" />
          <h1> {homeTeam.name} </h1>
        </div>
        <div className="FixtureTeam">
          <img src={awayTeam.logo} alt="" />
          <h1> {awayTeam.name}</h1>
        </div>
      </div>

      <div className="FixtureTime">
        {goals.home || goals.home === 0 ? (
          <div className="status">
            <div className="score">
              <div>{goals.home}</div>
              <div>{goals.away}</div>
            </div>

            <div className="time">
              <div>{status.elapsed}'</div>
              <span>{status.long}</span>
            </div>
          </div>
        ) : (
          <h1>
            {' '}
            {status.short === 'NS'
              ? new Date(date).toTimeString().slice(0, 5)
              : status.short}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Fixture
