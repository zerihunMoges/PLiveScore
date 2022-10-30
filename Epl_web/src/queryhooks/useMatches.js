import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { FixturesContext } from '../matchcontext/fixturescontext'
import { FixturesPageContext } from '../matchcontext/fixturespagecontext'
const fetchFixtures = async ({ pageParam = 1 }) => {
  return axios
    .get(`https://plapi.onrender.com/api/matches?page=${pageParam}`)
    .then((res) => res.data)
}

export default function useFixtures() {
  return useInfiniteQuery('matches', fetchFixtures, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) {
        return pages.length + 1
      }
      return false
    }
  })
}
