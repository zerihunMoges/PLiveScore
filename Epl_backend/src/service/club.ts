import { Club } from '../resources/club/club.model'

export async function createClub(club) {
  const newClub = await Club.create(club)
  return newClub
}

export async function updateClub(id, club) {
  const uClub = await Club.findOneAndUpdate({ opid: id }, club)
  return uClub
}
