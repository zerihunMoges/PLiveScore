import { Player } from '../resources/player/player.model'

export async function createPlayer(player) {
  const newPlayer = await Player.create(player)
  return newPlayer
}

export async function updatePlayer(id, player) {
  const uPlayer = await Player.findOneAndUpdate({ opid: id }, player)
  return uPlayer
}
