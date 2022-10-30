import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
const fetchResults = async ({ pageParam = 1 }) => {
  return axios
    .get(`https://plapi.onrender.com/api/matches/results?page=${pageParam}`)
    .then((res) => res.data)
}

export default function useResults() {
  return useInfiniteQuery('results', fetchResults, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) {
        return pages.length + 1
      }
      return false
    }
  })
}
