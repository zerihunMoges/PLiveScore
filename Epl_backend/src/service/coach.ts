import { Coach } from '../resources/coach/coach.model'

export async function createCoach(coach) {
  const newCoach = await Coach.create(coach)
  return newCoach
}

export async function updateCoach(id, coach) {
  const uCoach = await Coach.findOneAndUpdate({ opid: id }, coach)
  return uCoach
}
