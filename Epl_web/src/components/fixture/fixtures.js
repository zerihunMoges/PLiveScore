import { useNavigate } from 'react-router'
import './fixture.css'
function Fixture() {
  const navigate = useNavigate()
  return (
    <div
      className="Fixture"
      onClick={() => {
        navigate('/match')
      }}
    >
      <div className="FixtureTeam">
        <h1> Newcastle</h1>
        <img src={require('./3newcastel.png')} alt="" />
      </div>

      <div className="FixtureTime">
        <h1>6:30</h1>
        <h2> 30 OCT</h2>
      </div>
      <div className="FixtureTeam">
        <img src={require('./bourn.png')} alt="" />
        <h1> Bournemouth</h1>
      </div>
    </div>
  )
}

export default Fixture
