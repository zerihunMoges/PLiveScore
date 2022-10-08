import { Country } from '../resources/country/country.model'
import { Match } from '../resources/match/match.model'

export async function createMatch(match) {
  const newMatch = await Match.create(match)
  return newMatch
}
export async function updateMatch(id, Match) {
  const uMatch = await Match.findOneAndUpdate({ opid: id }, Match)
  return uMatch
}
