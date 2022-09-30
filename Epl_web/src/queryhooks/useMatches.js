import axios from 'axios'
import { useQuery } from 'react-query'
const fetchFixtures = async () => {
  return axios
    .get('https://epl-update.onrender.com/api/matches')
    .then((res) => res.data)
}

export default function useFixtures() {
  return useQuery('matches', fetchFixtures)
}
