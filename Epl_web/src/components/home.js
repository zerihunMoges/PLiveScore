import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import '../App.css'
import Fixture from './fixture/fixture'
import LiveMatch from './livematch'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'

import useFixtures from '../queryhooks/useMatches'
import Match from './match/match'
import { FixturesContext } from '../matchcontext/fixturescontext'
import UpdateFixtures from '../helper/test'
import { FixturesPageContext } from '../matchcontext/fixturespagecontext'
import { useIsFetching } from 'react-query'
const pageNumber = 1
function Home() {
  const [fixtures, setFixtures] = useContext(FixturesContext)
  const [page, setPage] = useContext(FixturesPageContext)
  var prevDate
  const {
    isLoading,
    isSuccess,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
    isError,
    error
  } = useFixtures(page)

  console.log(isLoading, page, isFetching, fixtures, data)
  const observer = useRef()
  const loadingElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      })

      if (node) observer.current.observe(node)
    },
    [fetchNextPage, hasNextPage, isLoading]
  )

  return (
    <div className="main">
      <h1 className="LiveMatchesHeader">Live Matches</h1>
      <div className="LiveMatches">
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <h2 className="LiveMatchesHeader">Today's Matches</h2>
      <div className="Fixtures">
        {data?.pages.map((page, i) =>
          page.data.map((match) => {
            if (new Date(match.date).toDateString().slice(0, 10) !== prevDate) {
              prevDate = new Date(match.date).toDateString().slice(0, 10)

              return (
                <div>
                  <div className="date">
                    {new Date(match.date).toDateString().slice(0, 10)}{' '}
                  </div>
                  <Fixture
                    key={match._id}
                    opId={match.opId}
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                    status={match.status}
                    date={match.date}
                    goals={match.goals}
                  />
                </div>
              )
            } else
              return (
                <Fixture
                  key={match._id}
                  opId={match.opId}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  status={match.status}
                  date={match.date}
                  goals={match.goals}
                />
              )
          })
        )}
        <div className="loading" ref={loadingElementRef}>
          {isFetchingNextPage || isLoading ? (
            <CircularProgress sx={{ margin: '1rem' }} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
