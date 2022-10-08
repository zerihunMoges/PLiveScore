import { Standing } from './standing.model'

export async function updateStanding(req, res, next) {
  const standing = req.body
  const {
    league,
    season,
    team,
    rank,
    points,
    goalsDiff,
    status,
    form,
    description,
    all,
    home,
    away
  } = standing
  var result = await Standing.findOneAndUpdate(
    { rank: standing.rank },
    {
      league,
      season,
      team,
      rank,
      points,
      goalsDiff,
      status,
      form,
      description,
      all,
      home,
      away
    }
  )

  if (!result) {
    result = await Standing.create({
      rank: standing.rank,
      league,
      season,
      team,
      points,
      goalsDiff,
      status,
      form,
      description,
      all,
      home,
      away
    })
  }

  if (result) {
    res.status(200)
    return
  }
  res.status(400)
}

export async function getStandings(req, res, next) {
  return res.status(200).json(Standing.find({}))
}
