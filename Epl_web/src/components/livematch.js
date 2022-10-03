import { useNavigate } from 'react-router'
import './livematch.css'
function LiveMatch(props) {
  const navigate = useNavigate()
  const color = props.color ? props.color : '#E8CE4D'

  return (
    <div
      className="LiveMatch"
      onClick={() => {
        navigate('/match')
      }}
    >
      <div className="LiveMatchHeader">
        <h1>Premier League</h1>
        <h2>Week 10</h2>
      </div>

      <div className="LiveMatchDetail">
        <div className="LiveMatchTeam">
          {/* <img src={require('./3newcastel.png')} alt="" /> */}
          <h1> Newcastle</h1>
          <h2>Home</h2>
        </div>
        <div className="LiveMatchScore">
          <h1>
            <span>3 </span>: <span>0</span>
          </h1>
          <h2> 83 min</h2>
        </div>
        <div className="LiveMatchTeam">
          {/* <img src={require('./bourn.png')} alt="" /> */}
          <h1> Bournemouth</h1>
          <h2>Away</h2>
        </div>
      </div>
    </div>
  )
}

export default LiveMatch
