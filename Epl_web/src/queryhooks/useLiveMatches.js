import axios from 'axios'
import { useQuery } from 'react-query'
const fetchLiveMatches = () => {
  return axios
    .get(`http://localhost:8000/api/matches/live`)
    .then((res) => res.data)
}

export const useLiveMatches = () => {
  return useQuery('livematches', () => fetchLiveMatches())
}
