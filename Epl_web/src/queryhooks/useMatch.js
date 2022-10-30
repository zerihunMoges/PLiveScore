import axios from 'axios'
import { useQuery } from 'react-query'
const fetchMatch = (matchId) => {
  console.log(`https://plapi.onrender.com/api/matches/${matchId}`)
  return axios
    .get(`https://plapi.onrender.com/api/matches/${matchId}`)
    .then((res) => res.data)
}

export const useMatch = (matchId) => {
  return useQuery(['match', matchId], () => fetchMatch(matchId))
}
