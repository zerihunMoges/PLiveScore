import axios from 'axios'
import { useQuery } from 'react-query'
const fetchMatch = (matchId) => {
  console.log(`https://epl-update.onrender.com/api/matches/${matchId}`)
  return axios
    .get(`http://localhost:8000/api/matches/${matchId}`)
    .then((res) => res.data)
}

export const useMatch = (matchId) => {
  return useQuery(['match', matchId], () => fetchMatch(matchId))
}
