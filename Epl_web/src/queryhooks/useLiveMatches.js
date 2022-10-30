import axios from 'axios'
import { useQuery } from 'react-query'
const fetchLiveMatches = () => {
  return axios
    .get(`https://plapi.onrender.com/api/matches/live`)
    .then((res) => res.data)
}

export const useLiveMatches = () => {
  return useQuery('livematches', () => fetchLiveMatches())
}
