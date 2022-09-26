import axios from 'axios'

const fetchMatches = () => {
  return axios.get('https://epl-update.onrender.com/api/matches')
}
