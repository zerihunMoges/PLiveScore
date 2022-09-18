import { Club } from './club.model'

export async function getClubs(req, res, next) {
  const clubs = await Club.find({})

  res.status(200).json(clubs)
}

export async function addClub(req, res, next) {
  try {
    const { team_key, team_name, team_badge, players, coaches } = req.body
    const club = await Club.create({
      name: team_name,
      op_id: team_key,
      logo: team_badge
    })
    if (club) {
      res.status(201).json(club)
      return
    }
    res.status(400).json({ message: 'can not create club' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export async function updateClub(req, res, next) {
  try {
    const { name, op_id, short_name, logo, country } = req.body
    const id = req.params.id
    const club = await Club.findById(id)
    if (club) {
      club.name = name ? name : club.name
      club.opId = op_id ? op_id : club.opId
      club.shortName = short_name ? short_name : club.shortName
      club.logo = logo ? logo : club.logo
      club.country = country ? country : club.country
      const uClub = await club.save()
      res.status(200).json({ data: uClub })
    }

    res.status(404).json({ message: 'club not found' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export async function bulkAddClub(req, res, next) {
  try {
    req.body.forEach(async (team) => {
      const { team_key, team_name, team_badge, players, coaches } = team
      let club = await Club.findOne({ op_id: team_key })

      if (club) {
        club = await Club.findOneAndUpdate(
          { op_id: team_key },
          {
            name: team_name,
            op_id: team_key,
            logo: team_badge
          }
        )
      } else {
        club = await Club.create({
          name: team_name,
          op_id: team_key,
          logo: team_badge
        })
      }

      if (club) {
        res.status(201).json(club)
        return
      }
      res.status(400).json({ message: 'can not create club' })
    })
  } catch (err) {
    res.status(500).json({ message: 'server error' })
  }
}
